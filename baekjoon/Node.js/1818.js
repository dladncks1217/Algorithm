const [[N], [...input]] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.trim().split(/\s+/g).map(Number);
    return v;
  });

const list = [];
list.push(input[0]);

function binarySearch(target) {
  let left = 0;
  let right = N - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (list[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return right;
}

let left = 0;
let right = 1;

while (right < N) {
  if (list[left] < input[right]) {
    left++;
    list[left] = input[right];
  } else {
    const index = binarySearch(input[right]);
    list[index] = input[right];
  }
  right++;
}

console.log(N - list.length);
