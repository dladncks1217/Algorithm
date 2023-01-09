const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const N = +input.shift();
const graph = input.map((v) => {
  v = v.split(" ").map(Number);
  return v;
});

const dy = Array.from({ length: N }, () =>
  Array.from({ length: 1 << N }, () => 0)
);

function DFS(x, visited) {
  // 모든 도시 방문 시
  if (visited === (1 << N) - 1) {
    // 출발점으로 가는 경로 있다면
    if (graph[x][0] === 0) {
      return Infinity;
    }
    return graph[x][0];
  }
  // 이미 최소비용이 계산되어있다면
  if (dy[x][visited] !== 0) {
    return dy[x][visited];
  }
  dy[x][visited] = Infinity;
  // 도시들 순회
  for (let i = 1; i < N; i++) {
    // 특정 도시로 가는 경로가 없다면 스킵
    if (graph[x][i] === 0) continue;
    // 이미 방문한 도시면 스킵 -> 방문하려는 도시가 이미 거쳐갔거나, 거쳐온 도시라면 스킵
    if (visited & (1 << i)) continue;
    dy[x][visited] = Math.min(
      dy[x][visited],
      DFS(i, visited | (1 << i)) + graph[x][i]
    );
  }
  return dy[x][visited];
}

console.log(DFS(0, 1));
