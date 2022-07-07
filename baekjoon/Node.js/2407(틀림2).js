const [M, N] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

let dy = Array.from(Array(M + 1), () => Array(N + 1).fill(0));

for (let i = 0; i <= M; i++) {
  for (let k = 0; k <= i; k++) {
    if (i === 0) {
      dy[i][k] = BigInt(1);
    } else if (k === i) {
      dy[i][k] = BigInt(1);
    } else {
      dy[i][k] = BigInt(dy[i - 1][k - 1]) + BigInt(dy[i - 1][k]);
    }
  }
}
console.log(dy);

console.log(dy[M][N]);
