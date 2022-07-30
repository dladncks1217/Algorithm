const [MN, ...inputs] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [nephew, snack] = MN.split(" ").map(Number);
const input = inputs[0].split(" ").map(Number);

input.sort((a, b) => a - b);
let answer = 0;

let min = 0;
let max = input[input.length - 1];

while (max >= min) {
  const mid = Math.floor((max + min) / 2);

  let count = 0;
  for (let i = 0; i < input.length; i++) {
    count += Math.floor(input[i] / mid);
  }

  if (count >= nephew) {
    min = mid + 1;
    answer = mid;
  } else {
    max = mid - 1;
  }
}

console.log(answer);
