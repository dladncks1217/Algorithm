const [length, ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let plus = [];
let minusAndZero = [];

input.forEach((v) => {
  if (v < 0 || v === 0) minusAndZero.push(v);
  else if (v !== 0) plus.push(v);
});

plus.sort((a, b) => b - a);
minusAndZero.sort((a, b) => a - b);

let plusResult = 0;
if (plus.length === 1) {
  plusResult = plus[0];
} else {
  for (let i = 1; i < plus.length; i++) {
    if (i === plus.length - 1 && i % 2 === 0) {
      plusResult += plus[i];
    }
    // 홀수번호일때(곱해서더하기)
    if (i % 2 !== 0) {
      if (plus[i] === 1) {
        plusResult += plus[i] + plus[i - 1];
      } else {
        plusResult += plus[i] * plus[i - 1];
      }
    }
  }
}

let minusResult = 0;
if (minusResult.length === 1) {
  minusResult = minusAndZero[0];
} else {
  for (let i = 0; i < minusAndZero.length; i++) {
    if (i === minusAndZero.length - 1 && i % 2 === 0) {
      minusResult += minusAndZero[i];
    }
    // 홀수번호일때(곱해서더하기)
    if (i % 2 !== 0) {
      minusResult += minusAndZero[i] * minusAndZero[i - 1];
    }
  }
}

console.log(plusResult + minusResult);
