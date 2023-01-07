const [[N, M], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });
for (let i = 1; i < M; i++) {
  input[0][i] += input[0][i - 1];
}
for (let i = 1; i < N; i++) {
  input[i][0] += input[i - 1][0];
}

for (let i = 1; i < N; i++) {
  for (let k = 1; k < M; k++) {
    input[i][k] += Math.max(input[i - 1][k], input[i][k - 1]);
  }
}

console.log(input[N - 1][M - 1]);
