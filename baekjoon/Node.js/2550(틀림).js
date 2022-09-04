const [[N], input1, input2] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });
const input = [];

input1.forEach((v) => {
  input.push(input2.indexOf(v));
});

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

console.log(list.length);

const answer = [];
let max = Math.max(...dy);
answer.push(input[dy.indexOf(max)]);
for (let i = dy.indexOf(max) - 1; i >= 0; i--) {
  if (dy[i] + 1 === max) {
    max = dy[i];
    answer.push(input2[input[i]]);
  }
}

answer.sort((a, b) => a - b);
console.log(answer.join(" "));
