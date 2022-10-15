const [N, M] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const visited = Array.from({ length: N + 1 }, () => 0);
const temp = [];

function DFS(L, i) {
  if (L === M) {
    return console.log(temp.join(" "));
  } else {
    for (let i = 1; i <= N; i++) {
      if (visited[i] === 0) {
        visited[i] = 1;
        temp.push(i);
        DFS(L + 1, i);
        visited[i] = 0;
        temp.pop();
      }
    }
  }
}

DFS(0, N);
