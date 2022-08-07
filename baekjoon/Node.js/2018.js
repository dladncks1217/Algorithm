const input = +require("fs").readFileSync("./dev/stdin").toString().trim();

let answer = 1;
let left = 1;
let right = 1;
let sum = 1;

while (right < input) {
  if (sum === input) {
    answer++;
    right++;
    sum += right;
  } else if (sum > input) {
    sum -= left;
    left++;
  } else {
    right++;
    sum += right;
  }
}

console.log(answer);
