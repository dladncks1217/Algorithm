let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

input = input.map((v) => +v);
input.shift();

input.forEach((v) => {
  let answer = 0;
  function DFS(sum, result) {
    if (sum > result) return;
    if (sum === result) {
      answer++;
    } else {
      for (let i = 1; i < 4; i++) {
        DFS(sum + i, result);
      }
    }
  }
  DFS(0, v);
  console.log(answer);
});
