const [[town], [road], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

let maxTime = 0;

const [start, end] = input.pop();

const graph = Array.from({ length: town + 1 }, () => []);
const reverseGraph = Array.from({ length: town + 1 }, () => []);
const check = Array.from({ length: town + 1 }, () => 0);
const reverseCheck = Array.from({ length: town + 1 }, () => 0);
const maxTimeArr = Array.from({ length: town + 1 }, () => 0);
const visited = Array.from({ length: town + 1 }, () => false);

for (const v of input) {
  const [start, end, cost] = v;
  // 정그래프
  graph[start].push([end, cost]);
  check[end]++;

  // 역그래프
  reverseGraph[end].push([start, cost]);
  reverseCheck[start]++;
}

let queue = [];
for (let i = 1; i < check.length; i++) {
  if (!check[i]) queue.push(i);
}

while (queue.length) {
  const now = queue.shift();

  graph[now].forEach((v) => {
    const [next, cost] = v;
    check[next]--;
    maxTimeArr[next] = Math.max(maxTimeArr[next], maxTimeArr[now] + cost);
    if (!check[next]) queue.push(next);
  });
}

maxTime = maxTimeArr[end];

queue = [end];

let count = 0;

while (queue.length) {
  const now = queue.shift();
  if (!visited[now]) {
    visited[now] = true;
    reverseGraph[now].forEach((v) => {
      const [next, cost] = v;
      // 시작~끝 부분이 maxTime과 같아야함. maxTimeArr의 탐색 출발지점 - 탐색 도착지점이 cost와 같아야함.
      if (maxTimeArr[now] - maxTimeArr[next] === cost) {
        queue.push(next);
        count++;
      }
    });
  }
}

console.log(`${maxTime}\n${count}`);
