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

let checkSum = Infinity;
let temp = [0, 0, 0];

for (let i = 0; i < input.length - 2; i++) {
  let left = i + 1;
  let right = input.length - 1;

  while (left < right) {
    let sum = input[left] + input[right] + input[i];

    if (Math.abs(sum) < Math.abs(checkSum)) {
      temp[0] = input[left];
      temp[1] = input[i];
      temp[2] = input[right];
      checkSum = sum;
    }
    if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }
}

temp.sort((a, b) => a - b);
console.log(temp.join(" "));
