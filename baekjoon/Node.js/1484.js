// 투포인터문제
const input = +require("fs").readFileSync("./dev/stdin").toString().trim();

let left = 1;
let right = 2;
let answer = [];

while (right <= 100000) {
  let check = right ** 2 - left ** 2;

  if (check > input) left += 1;
  if (check < input) right += 1;
  if (check === input) {
    answer.push(right);
    right += 1;
  }
}

answer.length === 0 ? console.log(-1) : console.log(answer.join("\n"));
