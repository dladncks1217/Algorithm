const [data, ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map((v) => +v);
    return v;
  });

const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];

const [col, row] = [data[0], data[1]]; // col, row
let check = Array.from(Array(col), () => Array(row).fill(0)); // 간곳 또 안가게

// 그래프 탐색
function DFS(x, y) {
  if (y === col && x === row) {
    return;
  } else {
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [dx[i + 1] + x, dy[i + 1] + y];
      if (nx >= 0 && ny >= 0 && nx < row && ny < col && check[ny][nx] === 0) {
        if (input[ny][nx] === 0) {
          check[ny][nx] = 1;
          input[ny][nx] = 3; // 바이러스 체크된거 3으로
          DFS(nx, ny);
          check[ny][nx] = 0;
        }
      }
    }
  }
}

for (let i = 0; i < col; i++) {
  for (let k = 0; k < row; k++) {
    if (input[i][k] === 2) {
      input[i][k] = 3; // 바이러스 체크된거 3으로
      DFS(k, i);
    }
  }
}

console.log(input);

// 벽 3개 다 완탐해야될듯
