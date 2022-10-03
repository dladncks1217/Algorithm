const [[N, M], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

const answer = [];
const find = [];

for (let i = 0; i < M; i++) {
  find.push(input.pop());
}

find.reverse();

const check = Array.from({ length: N + 1 }, () => 0);
const dist = Array.from({ length: N + 1 }, () =>
  Array.from({ length: N + 1 }, () => 0)
);

const graph = Array.from({ length: N + 1 }, () => []);
for (const v of input) {
  const [v1, v2, cost] = v;
  graph[v1].push([v2, cost]);
  graph[v2].push([v1, cost]);
}

for (let i = 1; i <= N; i++) {
  check[i] = 1;
  DFS(i, i, 0);
  check[i] = 0;
}

function DFS(start, end, sum) {
  dist[start][end] = sum;
  const size = graph[end].length;

  for (let i = 0; i < size; i++) {
    const [next, cost] = graph[end][i];

    if (check[next] === 0) {
      check[next] = 1;
      DFS(start, next, sum + cost);
      check[next] = 0;
    }
  }
}

for (let i = 0; i < find.length; i++) {
  const [a, b] = find[i];
  answer.push(dist[a][b]);
}

console.log(answer.join("\n"));
