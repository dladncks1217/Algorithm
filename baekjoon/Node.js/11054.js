const [[length], [...input]] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

const increaseDy = Array.from({ length: length }, () => 0); // 증가하는 수열
const decreaseDy = Array.from({ length: length }, () => 0); // 감소하는 수열
let resultDy; // 증가 + 감소 -1 넣어줄 배열

for (let i = 0; i < length; i++) {
  let max = 0;
  for (let k = i - 1; k >= 0; k--) {
    if (input[i] > input[k] && max < increaseDy[k]) max = increaseDy[k];
  }
  increaseDy[i] = max + 1;
}

for (let i = length - 1; i >= 0; i--) {
  let max = 0;
  for (let k = i + 1; k < length; k++) {
    if (input[i] > input[k] && max < decreaseDy[k]) {
      max = decreaseDy[k];
    }
  }
  decreaseDy[i] = max + 1;
}

resultDy = increaseDy.map((v, i) => {
  return increaseDy[i] + decreaseDy[i] - 1;
});

console.log(Math.max(...resultDy));
