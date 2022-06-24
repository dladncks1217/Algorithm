const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => +v);

input.shift();

const stack = [];
input.forEach((v) => {
  if (v === 0) {
    stack.pop();
  } else stack.push(v);
});

let answer = 0;
stack.forEach((v) => {
  answer += v;
});
console.log(answer);
