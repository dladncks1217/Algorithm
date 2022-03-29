// https://www.acmicpc.net/problem/2108
// 최빈값함수
const mostNum = (arr) => {
  let map = new Map();
  arr.forEach((v) => {
    if (!map.has(v)) {
      map.set(v, 1);
    } else {
      map.set(v, map.get(v) + 1);
    }
  });
  let maxValue = 0;
  let answer = [];
  map.forEach((v, k) => {
    if (maxValue < v) {
      maxValue = v;
      answer = [];
      answer.push(k);
    } else if (maxValue === map.get(k)) {
      answer.push(k);
    }
  });
  return answer.length !== 1 ? answer[1] : answer[0];
};
const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n").map(Number);
let N = input.shift();
let answer = [];
let median = []; // 중간값

input.sort((a, b) => a - b);
let avg = Math.round(input.reduce((acc, num) => (acc += num), 0) / N);
if (avg === -0) avg = 0;
answer.push(avg); // 평균값

input.forEach((v) => {
  if (median.indexOf(v) === -1) median.push(v);
});

answer.push(median[Math.floor(median.length / 2)]);
answer.push(mostNum(input));

input.length !== 1
  ? answer.push(input[input.length - 1] - input[0])
  : answer.push(0);

answer.forEach((v) => {
  console.log(v);
});
