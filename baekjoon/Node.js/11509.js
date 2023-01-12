// fs모듈 억까문제임
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  solution(input);
  process.exit();
});

function solution(input) {
  input.shift();

  input = input[0].split(" ").map(Number);

  let answer = 0;

  const check = Array.from({ length: 1000001 }, () => 0);

  input.forEach((v) => {
    if (check[v] === 0) {
      check[v - 1] += 1;
    } else {
      check[v] -= 1;
      check[v - 1] += 1;
    }
  });

  check.forEach((v) => {
    if (v > 0) answer += v;
  });

  console.log(answer);
}
