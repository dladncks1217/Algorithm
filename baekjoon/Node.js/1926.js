const [[n, m], ...input] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

let visited = [];
for (let i = 0; i < n; i++) {
  visited.push(Array.from(Array(m), (v) => false));
}

const dx = [1, 0, -1, 0];
const dy = [0, 1, 0, -1];

const bfs = (x, y) => {
  let size = 1;
  let queue = [];
  queue.push([x, y]);
  visited[x][y] = true;

  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];

      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;

      if (input[nx][ny] === 1 && !visited[nx][ny]) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
        size += 1;
      }
    }
  }
  return size;
};

let paintCount = 0;
let maxSize = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (input[i][j] === 1 && !visited[i][j]) {
      paintCount += 1;
      maxSize = Math.max(maxSize, bfs(i, j));
    }
  }
}

console.log(paintCount);
console.log(maxSize);
