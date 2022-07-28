const [[length, target], [...input]] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

let answer = 0;
let max = Math.max(...input);
let min = 0;

while (min <= max) {
  let center = Math.floor((max + min) / 2);
  let sum = 0;
  input.forEach((v) => {
    let rest = v - center;
    if (rest > 0) sum += rest;
  });
  if (sum >= target) {
    if (center > answer) answer = center;
    min = center + 1;
  } else {
    max = center - 1;
  }
}

console.log(answer);
