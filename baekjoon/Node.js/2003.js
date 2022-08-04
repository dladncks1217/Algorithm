const [[N, M], [...input]] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

let answer = 0;

let left = 0;
let right = 0;
let sum = input[left];

while (left < N && right < N) {
  if (sum === M) {
    answer++;
    sum += input[++right];
  } else if (sum < M) {
    sum += input[++right];
  } else if (sum > M) {
    sum -= input[left++];
  }
}

console.log(answer);
