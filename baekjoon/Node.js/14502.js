const [data, ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map((v) => +v);
    return v;
  });

let answer = 0;

const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];

const [col, row] = [data[0], data[1]]; // col, row

let check = Array.from(Array(col), () => Array(row).fill(0)); // 벽 세워진 뒤 그래프 탐색 간곳 또 안가게
let check2 = Array.from(Array(col), () => Array(row).fill(0)); // 벽세우기 간곳 또 안가게

let virus = []; // 바이러스 위치들
for (let i = 0; i < col; i++) {
  for (let k = 0; k < row; k++) {
    if (input[i][k] === 2) {
      virus.push([k, i]);
    }
  }
}

// 벽 세워진 뒤 그래프 탐색
function DFS(x, y, graph) {
  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [dx[i] + x, dy[i] + y];
    if (nx >= 0 && ny >= 0 && nx < row && ny < col && check[ny][nx] === 0) {
      if (!graph[ny][nx]) {
        check[ny][nx] = 1;
        graph[ny][nx] = 2;
        DFS(nx, ny, graph);
        check[ny][nx] = 0;
      }
    }
  }
  return;
}

// 벽세우기
function makeWalls(count) {
  // 벽 다 세워진상태면 그대로 temp배열만들어서 그래프탐색해보기
  if (count === 3) {
    let tempGraph = input.map((v) => {
      return v.slice();
    });
    virus.forEach((v) => {
      DFS(v[0], v[1], tempGraph);
    });

    let count = 0;
    for (let i = 0; i < col; i++) {
      for (let k = 0; k < row; k++) {
        if (tempGraph[i][k] === 0) {
          count++;
        }
      }
    }

    // 결과값 확인
    answer = Math.max(answer, count);
  } else {
    // 벽세우기
    for (let i = 0; i < col; i++) {
      for (let k = 0; k < row; k++) {
        if (check2[i][k] === 0 && input[i][k] === 0) {
          check2[i][k] = 1;
          input[i][k] = 1;
          makeWalls(count + 1);
          input[i][k] = 0;
          check2[i][k] = 0;
        }
      }
    }
  }
}
makeWalls(0, 0, 0);

console.log(answer);
