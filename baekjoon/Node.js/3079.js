const [NM, ...inputs] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [length, personCount] = NM.split(" ").map(Number);
const input = inputs.map(Number);
let answer = BigInt(0);

input.sort((a, b) => a - b);

let min = BigInt(0);
let max = BigInt(input[input.length - 1]) * BigInt(personCount);

while (max >= min) {
  let mid = BigInt((min + max) / BigInt(2));
  let sum = BigInt(0);
  for (let i = 0; i < input.length; i++) {
    sum += BigInt(mid / BigInt(input[i]));
  }

  if (sum >= BigInt(personCount)) {
    max = mid - BigInt(1);
    answer = mid;
  } else {
    min = mid + BigInt(1);
  }
}

if (answer === BigInt(0)) answer = BigInt(1);
console.log(answer.toString());
