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
let count = 0;
let checkSum = Infinity;

for (let i = 0; i < input.length - 2; i++) {
  let left = i + 1;
  let right = input.length - 1;

  while (left < right) {
    let sum = input[left] + input[right] + input[i];

    if (sum <= 0) {
      if (sum === 0) count++;
      left++;
    } else {
      right--;
    }
  }
}

console.log(count);
