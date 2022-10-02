const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const answer = [];
const N = input.shift();
const minCheck = [0, 0, 1, 7, 4, 2, 0, 8, 10];

const dy = Array.from({ length: 100 + 1 }, () => 0);
minCheck.forEach((v, i) => {
  dy[i] = v;
});
// 숫자 0시작 불가라서
dy[6] = 6;

for (let i = 9; i <= 100; i++) {
  dy[i] = dy[i - 2] * 10 + minCheck[2];
  for (let k = 3; k < 8; k++) {
    dy[i] = Math.min(dy[i], dy[i - k] * 10 + minCheck[k]);
  }
}

input.forEach((v) => {
  let temp = dy[v];

  let max = "";
  // 짝수면
  if (v % 2 === 0) {
    for (let i = 0; i < v / 2; i++) {
      max += "1";
    }
    // 홀수면
  } else {
    max = "7";
    for (let i = 0; i < Math.floor(v / 2) - 1; i++) {
      max += "1";
    }
  }
  temp += " " + max;
  answer.push(temp);
});

console.log(answer.join("\n"));
