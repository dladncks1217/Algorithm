const [[N], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

const queueStartData = []; // BFS에 써먹을 데이터들 섬별로 정리.

const answer = [];

const check = input.map((v) => {
  return Array.from({ length: v.length }, () => 0);
});

const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];

let islandNum = 2;

let temp = []; // queueStartData에 넣을 데이터

function DFS(x, y) {
  temp.push([x, y]);
  input[y][x] = islandNum;
  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [dx[i] + x, dy[i] + y];
    if (nx >= 0 && ny >= 0 && nx < N && ny < N) {
      if (check[ny][nx] === 0 && input[ny][nx] === 1) {
        check[ny][nx] = 1;
        DFS(nx, ny);
        check[ny][nx] = 0;
      }
    }
  }
}

for (let y = 0; y < N; y++) {
  for (let x = 0; x < N; x++) {
    if (input[y][x] === 1) {
      temp = [];
      DFS(x, y);
      queueStartData.push(temp.slice()); // BFS 탐색 위해 각 대륙별로 데이터들
      islandNum++;
    }
  }
}

const queue = [];

for (let i = 0; i < N; i++) {
  for (let k = 0; k < N; k++) {
    if (input[k][i] > 0) {
      queue.push([i, k]);
    }
  }
}

// 각 섬 수만큼 데이터 넣기.
for (let i = 0; i < queueStartData.length; i++) {
  const visited = input.map((v) => {
    return Array.from({ length: v.length }, () => 0);
  });
  let count = 0;
  let queue = queueStartData[i].slice();
  let islandNumber = input[queue[0][1]][queue[0][0]];

  let temp = []; // 한번에 큐에 넣어줄 temp배열
  while (queue.length) {
    const [x, y] = queue.shift(); // x,y값
    let isFinished = false; // 다리 완성됐는지?

    // 상하좌우 탐색
    for (let k = 0; k < 4; k++) {
      const nx = dx[k] + x;
      const ny = dy[k] + y;
      // 제대로 된 좌표인지?
      if (nx >= 0 && ny >= 0 && nx < N && ny < N) {
        // 다리 완성됐다면?
        if (
          visited[ny][nx] === 0 &&
          input[ny][nx] > 0 &&
          input[ny][nx] !== islandNumber
        ) {
          // console.log(ny, nx);
          isFinished = true; // 끝내기 트루
          break;
        } else if (visited[ny][nx] === 0 && input[ny][nx] === 0) {
          // console.log(count, nx, ny);
          visited[ny][nx] = 1;
          temp.push([nx, ny]); // 아직 바다면 temp배열로.
          // console.log(temp);
        }
      }
    }
    if (isFinished) break; // 만약 다리 완성된채로 나왔다면?
    // 아직 다리 미완인데 남은거 다썼으면 큐 푸시하고 카운트 추가
    if (queue.length === 0) {
      queue.push(...temp);
      temp = [];
      count++;
    }
  }
  answer.push(count);
}

console.log(Math.min(...answer));
