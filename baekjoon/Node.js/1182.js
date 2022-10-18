const [[N, target], input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

let answer = 0;
const check = Array.from({ length: N }, () => 0);

function DFS(s, sum) {
  if (s >= 0 && sum === target) answer++;
  for (let i = s + 1; i < N; i++) {
    if (check[i] === 0) {
      check[i] = 1;
      DFS(i, sum + input[i]);
      check[i] = 0;
    }
  }
}

DFS(-1, 0);

console.log(answer);
