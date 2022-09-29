const [[N], input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

input.sort((a, b) => a - b);

let sum = 1;

for (let i = 0; i < input.length; i++) {
  if (sum < input[i]) break;
  sum += input[i];
}

console.log(sum);
