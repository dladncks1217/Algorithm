const [[N, M], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

const queueStartData = []; // BFS에 써먹을 데이터들 섬별로 정리.

const check = input.map((v) => {
  return Array.from({ length: v.length }, () => 0);
});

const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];

let islandCount = 2;

let temp = []; // queueStartData에 넣을 데이터

function DFS(x, y) {
  for (let i = 0; i < 4; i++) temp.push([x, y, i]);
  input[y][x] = islandCount;
  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [dx[i] + x, dy[i] + y];
    if (nx >= 0 && ny >= 0 && nx < M && ny < N) {
      if (check[ny][nx] === 0 && input[ny][nx] === 1) {
        check[ny][nx] = 1;
        DFS(nx, ny);
        check[ny][nx] = 0;
      }
    }
  }
}

for (let y = 0; y < N; y++) {
  for (let x = 0; x < M; x++) {
    if (input[y][x] === 1) {
      temp = [];
      DFS(x, y);
      queueStartData.push(temp.slice()); // BFS 탐색 위해 각 대륙별로 데이터들
      islandCount++;
    }
  }
}

const bridges = [];

// 각 다리들 최소거리 구하기
queueStartData.forEach((queue) => {
  let findIsland; // 찾은 섬
  let nowIsland = input[queue[0][1]][queue[0][0]]; // 시작 섬
  let isFound = false; // 다리 찾았는지?
  let temp = []; // 한 칸씩 나아가기 위한 배열
  let count = 0; // 거리
  const bridgeLength = Array.from({ length: islandCount + 2 }, () => Infinity); // 다리들 최단거리
  bridgeLength[nowIsland] = 0;

  // 대륙별로 다리찾기
  while (queue.length > 0) {
    const [nowx, nowy, direction] = queue.shift();
    const [nx, ny] = [nowx + dx[direction], nowy + dy[direction]];

    // 제대로 된 좌표인지?
    if (nx >= 0 && ny >= 0 && nx < M && ny < N) {
      // 다른 섬을 찾았을 떄
      if (input[ny][nx] > 0 && input[ny][nx] !== nowIsland) {
        isFound = true; // 섬 찾았음
        findIsland = input[ny][nx]; // 찾은 섬 번호

        if (
          bridgeLength[findIsland] > count &&
          nowIsland > findIsland &&
          count > 1
        ) {
          bridges.push([nowIsland, findIsland, count]);
          bridgeLength[findIsland] = count;
        }
      } else if (input[ny][nx] === 0) {
        temp.push([nx, ny, direction]); // 아직 바다라면 더 나아가기 (temp에 담기)
      }
    }

    if (queue.length === 0) {
      count++;
      // 아직 못찾았다면
      queue = temp.slice();
      temp = [];
    }
  }
});

bridges.sort((a, b) => a[2] - b[2]);

// 크루스칼
const set = Array.from({ length: islandCount }, (v, i) => i);

function find(parent) {
  if (set[parent] === parent) return parent;
  return (set[parent] = find(set[parent]));
}

function union(a, b) {
  const parentA = find(a);
  const parentB = find(b);

  parentA < parentB ? (set[parentB] = parentA) : (set[parentA] = parentB);
}

function checkCycle(a, b) {
  const parentA = find(a);
  const parentB = find(b);
  if (parentA === parentB) return true;
  return false;
}

let answer = 0;

for (const v of bridges) {
  const [vertices1, vertices2, cost] = v;
  if (!checkCycle(vertices1, vertices2)) {
    answer += cost;
    union(vertices1, vertices2);
  }
}

for (let i = 2; i < set.length; i++) {
  find(i);
}
let start = set[2];
for (let i = 3; i < set.length; i++) {
  if (set[i] !== start) {
    console.log(-1);
    break;
  } else if (i === set.length - 1 && set[i] === start) {
    console.log(answer);
  }
}
