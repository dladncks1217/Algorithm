const [[length], [...input]] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

function combination(n) {
  return Math.floor((n * (n - 1)) / 2);
}

input.sort((a, b) => a - b);
let count = 0;

for (let i = 0; i < input.length - 2; i++) {
  let left = i + 1;
  let right = input.length - 1;

  while (left < right) {
    let l = 1;
    let r = 1;
    let sum = input[left] + input[right] + input[i];

    if (sum === 0) {
      if (input[left] === input[right]) {
        count += combination(right - left + 1);
        break;
      }
      while (left + 1 < right && input[left] === input[left + 1]) {
        l++;
        left++;
      }
      while (left < right - 1 && input[right] === input[right - 1]) {
        r++;
        right--;
      }
      count += l * r;
    }

    if (sum > 0) {
      right--;
    } else left++;
  }
}

console.log(count);
