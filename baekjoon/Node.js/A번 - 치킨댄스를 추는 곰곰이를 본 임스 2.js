const [[N], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

let answer = 0;

input.forEach((v) => {
  if (+v.split("D-")[1] <= 90) answer++;
});

console.log(answer);
