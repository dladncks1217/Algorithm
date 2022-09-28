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

const prefix_sum = [];

let sum = input[0];
prefix_sum.push(input[0]);
for (let i = 1; i < input.length; i++) {
  sum += input[i];
  prefix_sum[i] = sum;
}

console.log(input);
console.log(prefix_sum);

for(let i = 0;i<)