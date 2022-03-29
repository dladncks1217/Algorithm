const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let N = Number(input.shift());
let numArr = input.map((x) => +x);
let len = numArr.length;
let answer = "";
let avg = (center = countNum = range = 0);

numArr.sort(function (a, b) {
  return a - b;
});
const uniq = numArr.reduce((accu, curr) => {
  accu[curr] = (accu[curr] || 0) + 1;
  return accu;
}, {});

let minArr = [];
let uniqMaxNum = Math.max.apply(null, Object.values(uniq));
Object.keys(uniq).forEach(function (key) {
  if (uniq[key] === uniqMaxNum) {
    minArr.push(key);
  }
});

if (minArr.length > 1) {
  minArr.sort(function (a, b) {
    return a - b;
  });
  countNum = minArr[1];
} else {
  countNum = minArr[0];
}

let sum = numArr.reduce((a, b) => {
  return a + b;
});
avg = Math.round(sum / N);
center = numArr[Math.floor(len / 2)];
range = numArr[len - 1] - numArr[0];
answer = avg + "\n" + center + "\n" + countNum + "\n" + range;
console.log(answer);
