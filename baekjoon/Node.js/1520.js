const [[M, N], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

let answer = 0;
const dp = Array.from({ length: M }, () => Array.from({ length: N }, () => -1));

const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];

function DFS(x, y) {
  if (x === N - 1 && y === M - 1) return 1;
  if (dp[y][x] !== -1) return dp[y][x];

  dp[y][x] = 0;
  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];
    if (nx >= 0 && ny >= 0 && nx < N && ny < M) {
      if (input[y][x] > input[ny][nx]) dp[y][x] += DFS(nx, ny);
    }
  }

  return dp[y][x];
}

answer = DFS(0, 0);

console.log(answer);
