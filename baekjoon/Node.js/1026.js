const [[N], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

input[0].sort((a, b) => a - b);
input[1].sort((a, b) => b - a);

let answer = 0;
for (let i = 0; i < N; i++) {
  answer += input[0][i] * input[1][i];
}

console.log(answer);
