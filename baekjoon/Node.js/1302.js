const [N, ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.sort();

let answer = input[0];
let answercount = 1;
let count = 1;
let check = input[0];

for (let i = 1; i < input.length; i++) {
  if (input[i] === check) {
    count++;
  } else {
    if (answercount < count) {
      answercount = count;
      answer = check;
    }
    count = 1;
    check = input[i];
  }
}
if (answercount < count) {
  answercount = count;
  answer = check;
}

console.log(answer);
