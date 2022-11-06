const [A, K] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const dy = Array.from({ length: 1000001 }, () => 0);
dy[A] = 0;

for (let i = A + 1; i <= K; i++) {
  dy[i] = dy[i - 1] + 1;
  if (i % 2 === 0 && i / 2 >= A) dy[i] = Math.min(dy[i], dy[i / 2] + 1);
}

console.log(dy[K]);
