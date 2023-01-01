const [[N], input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

const graph = Array.from({ length: N }, () =>
  Array.from({ length: N }, () => Infinity)
);

const [x1, y1, x2, y2] = input;
graph[y1][x1] = 0;

const dx = [-2, -2, 0, 0, 2, 2];
const dy = [-1, 1, -2, 2, -1, 1];

const queue = [[x1, y1]];

while (queue.length) {
  let [x, y] = queue.shift();
  for (let i = 0; i < dx.length; i += 1) {
    const [nx, ny] = [x + dx[i], y + dy[i]];
    if (
      nx >= 0 &&
      ny >= 0 &&
      nx < N &&
      ny < N &&
      graph[y][x] + 1 < graph[ny][nx]
    ) {
      graph[ny][nx] = graph[y][x] + 1;
      queue.push([nx, ny]);
    }
  }
}

graph[y2][x2] === Infinity ? console.log(-1) : console.log(graph[y2][x2]);
