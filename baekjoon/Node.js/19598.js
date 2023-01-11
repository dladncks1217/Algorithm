const [[N], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

const result = [];

input.forEach((v) => {
  result.push([v[0], 1]);
  result.push([v[1], 0]);
});
result.sort((a, b) => {
  if (a[0] === b[0]) return a[1] - b[1];
  return a[0] - b[0];
});

let answer = 0;
let use = 0;

result.forEach((v) => {
  v[1] ? use++ : use--;

  answer = Math.max(answer, use);
});

console.log(answer);
