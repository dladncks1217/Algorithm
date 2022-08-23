const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.shift();

let max = Math.max(...input);
let dy = Array.from({ length: max }, () => 0);

dy[0] = 1;
dy[1] = 1;
dy[2] = 1;

for (let i = 3; i < max; i++) {
  dy[i] = (dy[i - 1] + dy[i - 2] + dy[i - 3]) % 1000000009;
}

for (let i = 0; i < input.length; i++) console.log(dy[input[i] - 1]);
