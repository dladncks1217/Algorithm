const [number, length] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim("")
  .split(" ")
  .map((v) => +v);

function solution(n, m) {
  let temp = Array.from({ length: m }, () => 0);
  function DFS(L, s) {
    if (L === m) {
      console.log(temp.join(" "));
    } else {
      for (let i = s; i <= n; i++) {
        temp[L] = i;
        DFS(L + 1, i);
      }
    }
  }
  DFS(0, 1);
}

solution(number, length);
