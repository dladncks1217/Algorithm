let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map((v) => +v);
    return v;
  });

let answer = 0;

const [lands, finds, road] = input.shift();

const items = input.shift(); // 아이템들 배열

items.unshift(0);

let graph = Array.from({ length: lands + 1 }, () => []);

function BFS(start, graph) {
  const resultQueue = Array.from({ length: lands + 1 }, () => 0); // 일단결과넣을큐
  for ([a, b, dist] of input) {
    graph[a].push([b, dist]);
    graph[b].push([a, dist]);
  }

  let check = Array.from({ length: lands + 1 }, () => 0);
  let queue = []; // bfs큐
  check[start] = 1; // 시작점
  queue.push(...graph[start]);
  resultQueue[start] = [items[start], 0]; // 초기값 결과그래프 넣기
  let prevNode = start; // 이전 노드
  let prevHealth = 0; // 이전 노드 거리

  while (queue.length) {
    const [distance, health] = queue.shift(); // 목적지, 탐색 가능한지
    console.log(distance, health);
    if (check[distance] === 0 && health + prevHealth <= finds) {
      // 아직 안가봤다면
      check[distance] = 1;
      queue.push(...graph[distance]); // 다음레벨갖다넣기
      // 값 수정
      resultQueue[distance] = [
        resultQueue[prevNode][0] + items[distance],
        resultQueue[prevNode][1] + health,
      ];
      prevNode = distance;
      prevHealth = health;
    }
  }
  console.log(resultQueue);
}

for (let i = 1; i <= lands; i++) {
  BFS(i, graph);
}
