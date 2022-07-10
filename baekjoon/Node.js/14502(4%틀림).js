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

let virus = []; // 바이러스 위치들
for (let i = 0; i < col; i++) {
  for (let k = 0; k < row; k++) {
    if (input[i][k] === 2) {
      virus.push([k, i]);
    }
  }
}

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

for (let one = 0; one <= col * row; one++) {
  let x1 = Math.floor(one / row);
  let y1 = one % row;
  if (input[y1][x1] === 0) {
    for (let two = one + 1; two <= col * row; two++) {
      let x2 = Math.floor(two / row);
      let y2 = two % row;
      if (input[y2][x2] === 0) {
        for (let three = two + 1; three <= col * row; three++) {
          let x3 = Math.floor(three / row);
          let y3 = three % row;
          console.log(y1, x1, y2, x2, y3, x3);
          if (input[y3][x3] === 0) {
            // 예시 배열
            let tempGraph = input.map((v) => {
              return v.slice();
            });

            tempGraph[y1][x1] = 1;
            tempGraph[y2][x2] = 1;
            tempGraph[y3][x3] = 1;

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
            let prevAnswer = answer;

            answer = Math.max(answer, count);
            if (answer !== prevAnswer) {
              console.log(answer);
            }
          }
        }
      }
    }
  }
}

console.log(answer);
