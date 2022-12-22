const [[N], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

let maxRain = 0;
let maxCount = 0;
const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];

input.forEach((v) => {
  maxRain = Math.max(maxRain, Math.max(...v));
});

function BFS(x, y, rain, graph) {
  const queue = [[x, y]];
  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx >= 0 && ny >= 0 && nx < N && ny < N && graph[ny][nx] > rain) {
        graph[ny][nx] = -1;
        queue.push([nx, ny]);
      }
    }
  }
}

for (let rain = 0; rain <= maxRain; rain++) {
  let count = 0;
  let graph = input.map((v) => v.slice());
  for (let i = 0; i < N; i++) {
    for (let k = 0; k < N; k++) {
      if (graph[i][k] > rain) {
        graph[i][k] = -1;
        BFS(k, i, rain, graph);
        count++;
      }
    }
  }
  maxCount = Math.max(maxCount, count);
}

console.log(maxCount);
