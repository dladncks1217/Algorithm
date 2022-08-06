const [[length], [...input], [x]] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

input.sort((a, b) => a - b);

let answer = 0;
let left = 0;
let right = input.length - 1;

while (left < right) {
  if (input[left] + input[right] === x) {
    answer++;
    left++;
    continue;
  } else if (input[left] + input[right] > x) {
    right--;
  } else {
    left++;
  }
}

console.log(answer);
