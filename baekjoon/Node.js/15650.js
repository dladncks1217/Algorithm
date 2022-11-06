const [N, M] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim("")
  .split(" ")
  .map((v) => +v);

let temp = [];

function DFS(L, s) {
  if (L === M) {
    console.log(temp.join(" "));
  } else {
    for (let i = s; i <= N; i++) {
      temp.push(i);
      DFS(L + 1, i + 1);
      temp.pop();
    }
  }
}
DFS(0, 1);
