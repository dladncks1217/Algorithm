const [length, ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const T = +length;

const answer = [];

function afterSkip(left, right, str) {
  while (left < right) {
    if (str[left] === str[right]) {
      left++;
      right--;
      continue;
    } else return false;
  }
  return true;
}

function solution(left, right, str) {
  while (left < right) {
    if (str[left] === str[right]) {
      left++;
      right--;
      continue;
    } else {
      if (afterSkip(left + 1, right, str) || afterSkip(left, right - 1, str)) {
        return 1;
      } else return 2;
    }
  }
  return 0;
}

for (let i = 0; i < T; i++) {
  let left = 0;
  let right = input[i].length - 1;
  answer.push(solution(left, right, input[i]));
}

console.log(answer.join("\n"));
