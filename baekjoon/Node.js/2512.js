const [[length], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

const money = input.pop()[0];

let max = Math.max(...input[0]);
let min = 1;

while (max >= min) {
  let mid = Math.floor((max + min) / 2);
  let sum = input[0].reduce((acc, v) => acc + (v <= mid ? v : mid), 0);

  if (sum <= money) {
    min = mid + 1;
  } else {
    max = mid - 1;
  }
}
console.log(max);
