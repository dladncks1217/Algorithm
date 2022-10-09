const [[N], [M], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

const graph = Array.from({ length: N + 1 }, () => []);
const visited = Array.from({ length: N + 1 }, () => 0);
visited[1] = 1;
const set = [1];

for (const v of input) {
  const [a, b] = v;

  graph[a].push(b);
  graph[b].push(a);
}

const queue = [[1, 0]];

while (queue.length) {
  const [curr, cost] = queue.shift();
  for (let i = 0; i < graph[curr].length; i++) {
    const check = visited[graph[curr][i]];
    if (check === 0 && cost < 2 && set.indexOf(graph[curr][i] === -1)) {
      visited[graph[curr][i]] = 1;
      queue.push([graph[curr][i], cost + 1]);
      set.push(graph[curr][i]);
    }
  }
}
console.log(set.length - 1);
