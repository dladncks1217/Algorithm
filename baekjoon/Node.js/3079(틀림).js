const [NM, ...inputs] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [length, personCount] = NM.split(" ").map(Number);
const input = inputs.map(Number);
let answer = 0;

input.sort((a, b) => a - b);

let min, max;

// if (length > 1) {
min = 0;
max = input[input.length - 1] * personCount;

// } else {
//   answer = BigInt(input[input.length - 1]) * BigInt(personCount);
// }

while (max >= min) {
  let mid = Math.floor((min + max) / 2);
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    sum += Math.floor(mid / input[i]);
  }

  if (sum >= personCount) {
    max = mid - 1;
    answer = mid;
  } else {
    min = mid + 1;
  }
}

if (answer === 0) answer = 1;
console.log(answer);
