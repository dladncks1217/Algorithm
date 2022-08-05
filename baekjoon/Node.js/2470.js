const [[length], [...input]] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

input.sort((a, b) => a - b);

let minResult = Number.MAX_SAFE_INTEGER;
let left = 0;
let right = input.length - 1;
let data = [input[0], input[input.length - 1]];

while (left < right) {
  let result = Math.abs(input[right] + input[left]);
  if (result < minResult) {
    data[0] = input[left];
    data[1] = input[right];
    minResult = result;
  }
  if (right - left === 1) break;
  if (left + 1 < right && left < right - 1) {
    let leftPlus = Math.abs(input[right] + input[left + 1]);
    let rightMinus = Math.abs(input[right - 1] + input[left]);

    leftPlus < rightMinus ? left++ : right--; // left++냐 right--냐
  }
}
console.log(data.join(" "));
