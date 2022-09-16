const [[N], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

input.sort((a, b) => a[0] - b[0]);

let answer = 0;
let start = input[0][0];
let end = input[0][1];

for (let i = 1; i < N; i++) {
  if (end < input[i][0]) {
    answer += end - start;
    start = input[i][0];
    end = input[i][1];
  } else if (input[i][0] <= end && input[i][1] >= end) {
    end = input[i][1];
  }
}

answer += end - start;

console.log(answer);
