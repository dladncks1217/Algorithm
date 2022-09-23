const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input.shift();

const arr = Array.from({ length: 100002 }, () => 0);
for (let i = 1; i <= N; i++) {
  arr[i] = input[i - 1];
}
let answer = 0;

const stack = [0];

for (let i = 1; i <= N + 1; i++) {
  while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
    let check = stack.pop();

    answer = Math.max(answer, arr[check] * (i - stack[stack.length - 1] - 1));
  }

  stack.push(i);
}
console.log(answer);
