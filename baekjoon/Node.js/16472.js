let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

let N = +input.shift();
let str = input.shift();

let left = 0;
let right = 0;
let answer = 0;

const alphabet = new Map();

while (left <= right && right < str.length) {
  const curr = str[right];

  alphabet.set(curr, (alphabet.get(curr) || 0) + 1);

  while (alphabet.size > N) {
    if (alphabet.get(str[left]) === 1) {
      alphabet.delete(str[left]);
    } else {
      alphabet.set(str[left], alphabet.get(str[left]) - 1);
    }
    left++;
  }

  answer = Math.max(answer, right - left + 1);
  right++;
}

console.log(answer);
