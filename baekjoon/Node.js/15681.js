const [[N, R, Q], ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

let dy = Array.from({ length: N + 1 }, () => 1);
let check = Array.from({ length: N + 1 }, () => false);

let query = [];

for (let i = 0; i < Q; i++) {
  query.push(...input.pop());
}

let graph = Array.from({ length: N + 1 }, () => []);

for ([a, b] of input) {
  graph[a].push(b);
  graph[b].push(a);
}

function DFS(L) {
  check[L] = true;
  for (let i = 0; i < graph[L].length; i++) {
    let node = graph[L][i];
    if (!check[node]) {
      dy[L] += DFS(node);
    }
  }
  return dy[L];
}

DFS(R);

let result = [];
for (let i = query.length - 1; i >= 0; i--) {
  result.push(dy[query[i]]);
}

console.log(result.join("\n"));
