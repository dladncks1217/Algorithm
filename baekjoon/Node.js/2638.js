const [[N, M], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];

let answer = 0;
const queue = [];

function removeCheck(x, y) {
  let count = 0;
  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];
    if (nx >= 0 && ny >= 0 && nx < M && ny < N) {
      if (input[ny][nx] === 2) count++;
    }
  }
  return count >= 2 ? true : false;
}

function outsideCheck(x, y) {
  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];
    if (nx >= 0 && ny >= 0 && nx < M && ny < N && visited[ny][nx] === 0) {
      if (input[ny][nx] === 0) {
        queue.push([nx, ny]);
        input[ny][nx] = 2;
        visited[ny][nx] = 1;
        outsideCheck(nx, ny);
      } else if (input[ny][nx] === 2) {
        visited[ny][nx] = 1;
        outsideCheck(nx, ny);
      }
    }
  }
}

let visited = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => 0)
);
outsideCheck(0, 0);

while (queue.length) {
  const [x, y] = queue.shift();
  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];
    if (nx >= 0 && ny >= 0 && nx < M && ny < N && input[ny][nx] === 1) {
      if (removeCheck(nx, ny)) {
        input[ny][nx] = 0;
      }
    }
  }
  if (!queue.length) {
    answer++;
    visited = Array.from({ length: N }, () =>
      Array.from({ length: M }, () => 0)
    );
    outsideCheck(0, 0);
  }
}

console.log(answer - 1);
