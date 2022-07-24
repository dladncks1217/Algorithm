const [[town], [length], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

console.log(town, length, input);

const [start, end] = input.pop();

const graph = Array.from({ length: town + 1 }, () => []);
const distance = Array.from({ length: town + 1 }, () => Infinity);

for (let [a, b, cost] of input) {
  graph[a].push([b, cost]);
  graph[b].push([a, cost]);
}

console.log(graph);

let queue = [];
distance[start] = 0;
queue.push([start, 0]);

while (queue.length) {
  const [point, cost] = queue.shift();
  if (point !== end) {
    for (let i = 0; i < graph[point].length; i++) {
      const next = graph[point][i][0];
      const nextcost = graph[point][i][1];

      if (distance[next] > distance[point] + nextcost) {
        distance[next] = distance[point] + nextcost;
        queue.push([next, nextcost]);
      }
    }
  }
}

console.log(distance);
