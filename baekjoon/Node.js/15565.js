const [[K, N], input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

let answer = Infinity;

let left = 0;
let right = 1;
let NCount = input[left] === 1 ? 1 : 0 + input[right] === 1 ? 1 : 0;

let len = 2;
while (left < K - N) {
  if (NCount < N) {
    if (right + 1 < K) {
      right += 1;
      len += 1;
      NCount += input[right] === 1 ? 1 : 0;
    } else {
      NCount -= input[left] === 1 ? 1 : 0;
      left += 1;
      len -= 1;
    }
  } else if (NCount === N) {
    answer = Math.min(answer, len);
    NCount -= input[left] === 1 ? 1 : 0;
    len -= 1;
    left += 1;
  }
}

answer === Infinity ? console.log(-1) : console.log(answer);
