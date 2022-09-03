const [[N], A, B] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

const newArr = [];

for (const v of A) {
  newArr.push(B.indexOf(v));
}

let list = [];

function binarySearch(target) {
  let left = 0;
  let right = N - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

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
list.push(newArr[left]);

while (right < N) {
  if (list[left] < newArr[right]) {
    left++;
    list[left] = newArr[right];
  } else {
    let index = binarySearch(newArr[right]);
    list[index] = newArr[right];
  }
  right++;
}

console.log(list.length);
