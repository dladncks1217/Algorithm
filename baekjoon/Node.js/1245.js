const [[N, M], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

let answer = 0;
let peakCheck = false;

const visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => false)
);

const dx = [1, 1, 0, -1, -1, -1, 0, 1];
const dy = [0, -1, -1, -1, 0, 1, 1, 1];

function DFS(x, y) {
  for (let i = 0; i < 8; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];
    if (nx >= 0 && ny >= 0 && nx < M && ny < N) {
      if (input[y][x] < input[ny][nx]) peakCheck = false;
      if (visited[ny][nx]) {
        continue;
      }
      if (input[y][x] === input[ny][nx] && !visited[ny][nx]) {
        visited[ny][nx] = true;
        DFS(nx, ny);
      }
    }
  }
}

for (let i = 0; i < N; i++) {
  for (let k = 0; k < M; k++) {
    if (!visited[i][k]) {
      peakCheck = true;
      visited[i][k] = true;
      DFS(k, i);
      peakCheck ? answer++ : "";
    }
  }
}

console.log(answer);
