const [[N], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split("");
    return v;
  });

let answer = 0;

let result = [];
const hash = {};
const alpahbetCheck = [];

input.forEach((v) => {
  for (let i = 0; i < v.length; i++) {
    if (hash.hasOwnProperty(v[i])) {
      const number = Math.pow(10, v.length - 1 - i);
      hash[v[i]] += number;
    } else {
      const number = Math.pow(10, v.length - 1 - i);
      hash[v[i]] = number;
      alpahbetCheck.push(v[i]);
    }
  }
});

alpahbetCheck.forEach((v) => {
  result.push(hash[v]);
});

result.sort((a, b) => b - a);

let start = 9;
for (let i = 0; i < result.length; i++) {
  answer += result[i] * start;
  start--;
}

console.log(answer);
