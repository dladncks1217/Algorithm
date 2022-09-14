const [[N], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

const check = input.map((v) => {
  return Array.from({ length: v.length }, () => 0);
});

const dx = [1, 0, -1, 0];

const dy = [0, -1, 0, 1];
let islandNum = 2;

function DFS(x, y) {
  if (input[y][x] === 0) {
    console.log(x, y);
  } else {
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [dx[i] + x, dy[i] + y];
      if (nx >= 0 && ny >= 0 && nx < N && ny < N) {
        if (check[ny][nx] === 0) {
          // && input[ny][nx] === 1
          check[ny][nx] = 1;
          input[ny][nx] = islandNum;
          DFS(nx, ny);
          check[ny][nx] = 0;
        }
      }
    }
  }
}

for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    if (input[y][x] === 1) {
      DFS(x, y);

      islandNum++;
    }
  }
}

const queue = [];

// while(queue.length)
