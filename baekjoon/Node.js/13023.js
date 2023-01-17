const [[N, M], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

const graph = Array.from({ length: N }, () => []);
for (const [A, B] of input) {
  graph[A].push(B);
  graph[B].push(A);
}

let visited = Array.from({ length: N }, () => 0);

let answer = 0;

function DFS(L, curr) {
  visited[curr] = 1;
  if (L === 4) {
    return (answer = 1);
  } else {
    for (let i = 0; i < graph[curr].length; i++) {
      if (visited[graph[curr][i]] === 0) {
        DFS(L + 1, graph[curr][i]);
      }
    }
    visited[curr] = 0;
  }
}

for (let i = 0; i < N; i++) {
  visited = Array.from({ length: N }, () => 0);
  DFS(0, i);
  if (answer === 1) break;
}

console.log(answer);
