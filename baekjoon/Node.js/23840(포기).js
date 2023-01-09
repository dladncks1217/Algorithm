const [[N, M], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

const necessary = input.pop();
// 필수로 다 거쳐야 하는 정점들
let necessaryBit = 0;
necessary.forEach((v) => {
  necessaryBit = necessaryBit | v;
});

input.pop();
// 출발점이랑 도착점
const [start, end] = input.pop();

let dy = [];
// 그래프 생성
const graph = Array.from({ length: N }, () =>
  Array.from({ length: N }, () => 0)
);
for (const [start, end, cost] of input) {
  graph[start - 1][end - 1] = cost;
}

// 탐색 가능 시작 목록
const startList = [];
graph[start].forEach((v, i) => {
  if (v > 0) startList.push(i);
});

function DFS(x, visited) {
  // 요구하는 도시 다 거쳐서 모두 방문했다면
  if (visited === (1 << N) - 1) {
    if (graph[x][0] === 0) return Infinity;
    return graph[x][0];
  }
  // 이미 최소비용 계산되어있다면
  if (dy[x][visited] !== 0) return dy[x][visited];
  dy[x][visited] = Infinity;

  for (let i = 0; i < N; i++) {
    if (graph[x][i] === 0) continue; // 특정 도시로 가는 경로 없다면 스킵
    if (visited & (1 << i)) continue; // 이미 방문했다면 스킵
    dy[x][visited] = Math.min(
      dy[x][visited],
      DFS(i, visited | ((1 << i) + graph[x][i]))
    );
  }
  return dy[x][visited];
}

const results = [];

startList.forEach((v) => {
  // DP 배열
  dy = Array.from({ length: N }, () => Array.from({ length: 1 << N }, () => 0));
  results.push(DFS(start - 1, v));
});

console.log(results);
