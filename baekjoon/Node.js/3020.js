const [[N, H], ...inputs] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

const input = inputs.map((v) => v[0]);
const top = Array.from({ length: H + 1 }, () => 0);
const bottom = Array.from({ length: H + 1 }, () => 0);

// 부분합 처리
for (let i = 0; i < input.length; i++) {
  if (i % 2 === 0) bottom[input[i]]++;
  else top[input[i]]++;
}

const sumTop = [];
const sumBottom = [];

// 부분합 만들기
for (let i = H; i >= 0; i--) {
  sumTop[i] = (sumTop[i + 1] ?? 0) + top[i];
  sumBottom[i] = (sumBottom[i + 1] ?? 0) + bottom[i];
}

let min = 200000;
let count = 0;

// 석순은 날아가는 높이보다 더 크거나 같으면 됨.
// 종유석은 전체 높이 - 지나가는길 에서 1이상 커야함
for (let i = H; i > 0; i--) {
  sumBottom[i] += sumTop[H - i + 1];
  if (sumBottom[i] < min) {
    min = sumBottom[i];
    count = 1;
  } else if (sumBottom[i] === min) {
    count++;
  }
}

console.log(min, count);
