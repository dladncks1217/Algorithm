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
let count = 0;

function goodNumber(idx, left, right) {
  let sum = 0;
  while (left < right) {
    if (left == idx) left++;
    if (right == idx) right--;
    if (left >= right) return false;
    sum = input[left] + input[right];
    if (sum == input[idx]) return true;
    if (sum < input[idx]) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}

for (let i = 0; i < N; i++) {
  if (goodNumber(i, 0, N - 1)) count++;
}
console.log(count);
