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
let queue = []; // BFS탐색에 써먹을거임

let DFSCheck = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => 0)
);

function DFS(x, y) {
  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];
    if (nx >= 0 && ny >= 0 && nx < M && ny < N) {
      if (input[ny][nx] === 0 && DFSCheck[ny][nx] === 0) {
        DFSCheck[ny][nx] = 1;

        queue.push([ny, nx]);
        DFS(nx, ny);
      }
    }
  }
}
DFS(0, 0);

const check = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => 0)
);

let temp = []; // 한칸한칸 나아갈 계획
let answer = 0;
let count = 0;
let prevcount = 0;

while (queue.length) {
  const [y, x] = queue.shift();
  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];
    if (nx >= 0 && ny >= 0 && nx < M && ny < N) {
      if (input[ny][nx] === 1 && check[ny][nx] === 0) {
        temp.push([ny, nx]);
        input[ny][nx] = 0;
        check[ny][nx] = 1;
      }
    }
  }
  if (!queue.length) {
    prevcount = count;
    count = temp.length;

    queue = [];
    if (temp.length) {
      let checks = temp[0].slice();
      DFSCheck = Array.from({ length: N }, () =>
        Array.from({ length: M }, () => 0)
      );
      DFS(checks[1], checks[0]);
    }

    answer++;
    temp = [];

    // console.log(answer, count);
  }
}
console.log(answer - 1);
console.log(prevcount);
