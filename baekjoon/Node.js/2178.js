let input = require("fs").readFileSync("./dev/stdin").toString().split("\n");

const [col, row] = input[0].split(" ").map((v) => +v);
input.shift();
input = input.map((v) => {
  v = v.split("").map((v) => {
    if (v === "1") return Infinity;
    else return 0;
  });
  return v;
});
input[0][0] = 1;
const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];
const check = Array.from(Array(col), () => Array(row).fill(0));

function DFS(x, y) {
  if (x === row - 1 && y === col - 1) {
    return;
  } else {
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < row &&
        ny < col &&
        check[ny][nx] === 0 &&
        input[ny][nx] !== 0
      ) {
        if (input[y][x] + 1 < input[ny][nx]) {
          input[ny][nx] = Math.min(input[y][x] + 1, input[ny][nx]);
          check[ny][nx] = 1;
          DFS(nx, ny);
          check[ny][nx] = 0;
        }
      }
    }
  }
}

DFS(0, 0);

console.log(input[col - 1][row - 1]);
