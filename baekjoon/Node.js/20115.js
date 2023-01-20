const [[N], input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

input.sort((a, b) => b - a);

let min = input.pop();
let max = input.shift() + min / 2;

while (input.length) {
  min = input.pop();

  min > max ? ([min, max] = [max, min]) : "";
  max += min / 2;
}

console.log(max);
