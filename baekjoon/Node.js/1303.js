const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split("");
    return v;
  });

input.shift();
const N = input[0].length;
const M = input.length;
let result = [0, 0];

const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];
let checkCount = 1;

function DFS(x, y, soldier) {
  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];
    if (nx >= 0 && ny >= 0 && nx < N && ny < M && input[ny][nx] === soldier) {
      checkCount += 1;
      input[ny][nx] = 0;
      DFS(nx, ny, soldier);
    }
  }
}

// 내 병사
for (let i = 0; i < M; i++) {
  for (let k = 0; k < N; k++) {
    if (input[i][k] === "W") {
      checkCount = 1;
      input[i][k] = 0;
      DFS(k, i, "W");
      result[0] += checkCount ** 2;
    }
  }
}

// 적 병사
for (let i = 0; i < M; i++) {
  for (let k = 0; k < N; k++) {
    if (input[i][k] === "B") {
      checkCount = 1;
      input[i][k] = 0;
      DFS(k, i, "B");
      result[1] += checkCount ** 2;
    }
  }
}
console.log(result.join(" "));
