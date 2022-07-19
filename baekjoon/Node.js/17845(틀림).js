const [[maxStudy, length], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

let answer = 0;
const check = Array.from({ length: length }, () => 0);

function DFS(time, sum, s) {
  if (time <= maxStudy && answer <= sum) {
    answer = sum;
  }
  if (time > maxStudy) {
    return;
  } else {
    for (let i = s; i < input.length; i++) {
      if (check[i] === 0) {
        check[i] = 1;
        const [importRate, needTime] = input[i];
        DFS(time + needTime, sum + importRate, s + 1);
        check[i] = 0;
      }
    }
  }
}

DFS(0, 0, 0);

console.log(answer);
