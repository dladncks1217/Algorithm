// 노드 인풋 억까문제임

// const [[N], ...input] = require("fs")
//   .readFileSync("./dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((v) => {
//     v = v.split("").map(Number);
//     return v;
//   });
let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = +input.shift();
input = input.map((str) => str.split("").map(Number));

const dist = Array.from({ length: N }, () =>
  Array.from({ length: N }, () => -1)
);

const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];

// x,y,cost
const queue = [[0, 0, 0]];

while (queue.length) {
  const [x, y, cost] = queue.shift();
  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];
    if (nx >= 0 && ny >= 0 && nx < N && ny < N) {
      // 더해질 코스트
      const pluscost = input[ny][nx] === 1 ? 0 : 1;

      if (cost + pluscost < dist[ny][nx] || dist[ny][nx] === -1) {
        dist[ny][nx] = cost + pluscost;
        queue.push([nx, ny, cost + pluscost]);
      }
    }
  }
}

console.log(dist[N - 1][N - 1]);
