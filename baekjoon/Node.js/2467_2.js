const [[N], input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

let sum = Infinity;
let answer = [];

let left = 0;
let right = input.length - 1;

while (left < right) {
  let compare = Math.abs(input[left] + input[right]);
  if (compare === 0) {
    answer[0] = input[left];
    answer[1] = input[right];
    break;
  }
  if (sum > compare) {
    sum = compare;
    answer[0] = input[left];
    answer[1] = input[right];
  } else {
    let leftPlus = Math.abs(input[left + 1] + input[right]);
    let rightMinus = Math.abs(input[left] + input[right - 1]);

    leftPlus < rightMinus ? left++ : right--;
  }
}

console.log(answer.join(" "));
