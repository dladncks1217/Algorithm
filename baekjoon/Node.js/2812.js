const [input1, input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

let [N, K] = input1.split(" ").map(Number);

let count = +K;
const answer = [];

for (let i = 0; i < input.length; i++) {
  while (count > 0 && answer[answer.length - 1] < input[i]) {
    answer.pop();
    count--;
  }
  answer.push(input[i]);
}

console.log(answer.join("").slice(0, input.length - K));
