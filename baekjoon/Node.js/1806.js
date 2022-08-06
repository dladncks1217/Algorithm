const [[N, S], [...arr]] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

let answer = N + 1;
let left = 0;
let right = 0;
let sum = arr[left];

while (left < N) {
  if (sum < S) {
    right++;
    if (right === N) break;
    sum += arr[right];
  } else if (sum >= S) {
    answer = Math.min(answer, right - left + 1);
    sum -= arr[left];
    left++;
  }
}
answer == N + 1 ? console.log(0) : console.log(answer);
