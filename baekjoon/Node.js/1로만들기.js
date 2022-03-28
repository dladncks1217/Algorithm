// https://www.acmicpc.net/problem/1463
const fs = require("fs");
let [N] = fs.readFileSync("./dev/stdin").toString().split(" ").map(Number);
let dy = Array.from({ length: N + 1 }, () => 0);

for (let i = 2; i <= N; i++) {
  dy[i] = dy[i - 1] + 1;
  if (i % 2 === 0) {
    dy[i] = Math.min(dy[i], dy[i / 2] + 1);
  }
  if (i % 3 === 0) {
    dy[i] = Math.min(dy[i], dy[i / 3] + 1);
  }
}

console.log(dy[N]);
