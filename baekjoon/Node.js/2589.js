const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [H, W] = input.shift().split(" ").map(Number);
const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];

const map = input.map((v) => {
  v = v.split("");
  return v;
});

let answer = 0;

function BFS(x, y) {
  const graph = map.map((v) => v.slice());
  const queue = [[x, y, 0]];
  graph[y][x] = "W";
  let dist = 0;

  while (queue.length) {
    const [startX, startY, count] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [dx[i] + startX, dy[i] + startY];
      if (nx >= 0 && ny >= 0 && nx < W && ny < H && graph[ny][nx] === "L") {
        dist = Math.max(dist, count + 1);
        graph[ny][nx] = "W";
        queue.push([nx, ny, count + 1]);
      }
    }
  }
  return dist;
}

for (let i = 0; i < H; i++) {
  for (let k = 0; k < W; k++) {
    if (map[i][k] === "L") answer = Math.max(answer, BFS(k, i));
  }
}

console.log(answer);
