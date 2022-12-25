const [N, ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.sort((a, b) => a - b);

max = input[N - 1];

for (let i = N - 1; i >= 0; i--) {
  let current = input[i] * (N - i);
  max = Math.max(max, current);
}

console.log(max);
