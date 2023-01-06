const fs = require("fs");
const inputs = fs.readFileSync("./dev/stdin").toString().split("\n");

const [N, M] = inputs.shift().split(" ").map(Number);
const input = inputs.map((v) => {
  v = v.split(" ").map(Number);
  return v;
});

let answer = 64;

const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];

function findSpot() {
  let count = 0;
  for (let i = 0; i < N; i++)
    for (let k = 0; k < M; k++) if (input[i][k] === 0) count++;
  return count;
}

function changeBoard(queue, data) {
  let [x, y] = queue.shift();
  input[y][x] = data;
}

function DFS(index) {
  if (index === cctv.length) {
    console.log(findSpot());
    result = Math.min(answer, findSpot());
    return;
  }

  const [x, y] = cctv.shift();
  const queue = [];

  for (let i = 0; i < 4; i++) {
    let [nx, ny] = [x + dx[i], y + dy[i]];

    while (nx >= 0 && ny >= 0 && nx < M && ny < N && input[ny][nx] !== 6) {
      if (input[ny][nx] === 0) {
        queue.push([nx, ny]);
      }
      nx += dx[i];
      ny += dy[i];
    }
  }

  if (input[y][x] === 1) {
    for (let i = 0; i < 4; i++) {
      changeBoard(queue[i], -1);
      DFS(index + 1);
      changeBoard(queue[i], 0);
    }
  } else if (input[y][x] === 2) {
    for (let i = 0; i < 3; i += 2) {
      changeBoard(queue[i], -1);
      changeBoard(queue[i + 1], -1);
      DFS(index + 1);
      changeBoard(queue[i], 0);
      changeBoard(queue[i + 1], 0);
    }
  } else if (input[y][x] === 3) {
    for (let i = 0; i < 2; i++) {
      changeBoard(queue[i], -1);
      for (let k = 2; k < 4; k++) {
        changeBoard(queue[k], -1);
        DFS(index + 1);
        changeBoard(queue[k], 0);
      }
      changeBoard(queue[i], 0);
    }
  } else {
    for (let i = 0; i < 4; i++) {
      changeBoard(queue[i], -1);
    }
    DFS(index + 1);
    for (let i = 0; i < 4; i++) {
      changeBoard(queue[i], 0);
    }
  }
}

const cctv = [];
for (let i = 0; i < N; i++) {
  for (let k = 0; k < M; k++) {
    if (input[i][k] >= 1 && input[i][k] <= 5) {
      cctv.push([k, i]);
    }
  }
}

DFS(0);
console.log(answer);
