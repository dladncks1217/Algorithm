const [NK, ...inputs] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [character, upLevel] = NK.split(" ").map(Number);

const input = inputs.map(Number);
input.sort((a, b) => a - b);

let answer = 0;

let min = input[0];
let max = min + upLevel;

while (max >= min) {
  let mid = Math.floor((min + max) / 2);
  let needs = 0;
  for (let i = 0; i < character; i++) {
    // console.log(mid, input[i]);
    if (mid > input[i]) {
      needs += mid - input[i];
    }
  }

  if (needs > upLevel) {
    max = mid - 1;
  } else {
    answer = mid;
    min = mid + 1;
  }
}

console.log(answer);
