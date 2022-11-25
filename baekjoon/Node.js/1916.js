const [[N], [M], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

const [start, end] = input.pop();
const graph = Array.from({ length: N + 1 }, () => []);
const dist = Array.from({ length: N + 1 }, () => Infinity);
dist[start] = 0;

for (let [v1, v2, cost] of input) {
  graph[v1].push([v2, cost]);
}

const queue = [[start, 0]];

while (queue.length) {
  const [v, cost] = queue.shift();

  if (cost > dist[v]) continue;
  for (const [nv, ncost] of graph[v]) {
    if (dist[v] + ncost < dist[nv]) {
      dist[nv] = dist[v] + ncost;
      queue.push([nv, ncost]);
    }
  }
}

console.log(dist[end]);
