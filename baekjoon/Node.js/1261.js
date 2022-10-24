let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input.shift().split(" ").map(Number);
input = input.map((v) => {
  v = v.split("").map(Number);
  return v;
});

const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];

const visited = Array.from({ length: M }, () =>
  Array.from({ length: N }, () => Infinity)
);
visited[0][0] = 0;

const queue = [[0, 0]];

while (queue.length) {
  const [x, y] = queue.shift();
  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];
    if (nx >= 0 && ny >= 0 && nx < N && ny < M) {
      const costcheck = input[ny][nx] === 1 ? 1 : 0;
      if (costcheck === 1) {
        if (visited[ny][nx] > visited[y][x] + 1) {
          queue.push([nx, ny]);
          visited[ny][nx] = visited[y][x] + 1;
        }
      } else {
        if (visited[ny][nx] > visited[y][x]) {
          queue.push([nx, ny]);
          visited[ny][nx] = visited[y][x];
        }
      }
    }
  }
}
console.log(visited[M - 1][N - 1]);
