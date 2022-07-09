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
let check = Array.from(Array(col), () => Array(row).fill(0)); // 간곳 또 안가게

let walls = []; // 벽 가능목록

for (let y1 = 0; y1 < col; y1++) {
  for (let x1 = 0; x1 < row; x1++) {
    let temp = [];
    if (input[y1][x1] === 0) {
      temp.push(x1, y1);

      for (let y2 = y1; y2 < col; y2++) {
        for (let x2 = x1; x2 < row; x2++) {
          if (y1 === y2 && x1 === x2) continue;
          if (input[y2][x2] === 0) {
            temp.push(x2, y2);

            for (let y3 = y2; y3 < col; y3++) {
              for (let x3 = x2; x3 < row; x3++) {
                if ((y1 === y3 && x1 === x3) || (y2 === y3 && x2 === x3))
                  continue;
                if (input[y3][x3] === 0) {
                  temp.push(x3, y3);
                  walls.push(temp.slice());
                  temp.pop();
                  temp.pop();
                }
              }
            }
            temp.pop();
            temp.pop();
          }
        }
      }
      temp.pop();
      temp.pop();
    }
  }
}

// 그래프 탐색
function DFS(x, y, graph) {
  if (y === col - 1 && x === row - 1) {
    return;
  } else {
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [dx[i + 1] + x, dy[i + 1] + y];
      if (nx >= 0 && ny >= 0 && nx < row && ny < col && check[ny][nx] === 0) {
        if (input[ny][nx] === 0) {
          check[ny][nx] = 1;
          graph[ny][nx] = 3; // 바이러스 체크된거 3으로
          DFS(nx, ny, graph);
          check[ny][nx] = 0;
        }
      }
    }
  }
}

let virus = []; // 바이러스 위치들
for (let i = 0; i < col; i++) {
  for (let k = 0; k < row; k++) {
    if (input[i][k] === 2) {
      virus.push([k, i]);
    }
  }
}

walls.forEach((v) => {
  let tempGraph = input.map((v) => {
    return v.slice();
  });
  tempGraph[v[1]][v[0]] = 1;
  tempGraph[v[3]][v[2]] = 1;
  tempGraph[v[5]][v[4]] = 1;
  for (let i = 0; i < virus.length; i++) {
    // tempGraph[virus[i][1]][virus[i][0]] = 3; // 바이러스 체크된거 3으로
    DFS(virus[i][0], virus[i][1], tempGraph);
  }
  let count = 0;
  tempGraph.forEach((v) => {
    v.forEach((k) => {
      if (k === 0) count++;
    });
  });
  answer = Math.max(answer, count);
  console.log(tempGraph);
});

console.log(answer);
// 벽 3개 다 완탐해야될듯
