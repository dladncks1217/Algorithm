const [[N], ...inputs] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

inputs.sort((a, b) => a[0] - b[0]);

const A = [];
const B = [];

for (const a of inputs) {
  A.push(a[0]);
  B.push(a[1]);
}

const input = B.slice();

let list = [];
list.push(input[0]);
const dy = [0];

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
while (right < N) {
  if (list[left] < input[right]) {
    left++;
    list[left] = input[right];
    dy[right] = left;
  } else {
    let index = binarySearch(input[right]);
    list[index] = input[right];
    dy[right] = index;
  }
  right++;
}

console.log(N - list.length);

const answer = [];
let max = Math.max(...dy);
let start = false;

for (let i = dy.length - 1; i >= 0; i--) {
  if (!start) {
    if (max === dy[i]) {
      start = true;
    } else {
      answer.push(A[i]);
    }
  } else {
    if (dy[i] + 1 === max) {
      max = dy[i];
    } else {
      answer.push(A[i]);
    }
  }
}

answer.sort((a, b) => a - b);
console.log(answer.join("\n"));
