const [[N], [...input]] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

let list = [];

function binarySearch(target) {
  let left = 0;
  let right = input.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (target > list[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return right;
}

let left = 0;
let right = 1;
list.push(input[left]);

while (right < input.length) {
  if (list[left] < input[right]) {
    left++;
    list[left] = input[right];
  } else {
    check = binarySearch(input[right]);
    list[check] = input[right];
  }
  right++;
}

console.log(list.length);
