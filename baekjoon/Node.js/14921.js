const [[length], [...input]] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

let minResult = Number.MAX_SAFE_INTEGER;
let left = 0;
let right = input.length - 1;
let data = [input[left], input[right]];

while (left < right) {
  let result = Math.abs(input[left] + input[right]);
  if (result < minResult) {
    data[0] = input[left];
    data[1] = input[right];
    minResult = result;
  }

  if (right - left === 1) break;
  if (left + 1 < right && left < right - 1) {
    let leftPluus = Math.abs(input[left + 1] + input[right]);
    let rightMinus = Math.abs(input[left] + input[right - 1]);
    leftPluus < rightMinus ? left++ : right--;
  }
}

console.log(data[0] + data[1]);
