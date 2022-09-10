const [[length], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

const dy = Array.from({ length: length + 1 }, () => 0); // 결과들 저장할 dy배열
const start = Array.from({ length: length + 1 }, () => 0); // 시작 소요시간 값들
const graph = Array.from({ length: length + 1 }, () => []); // 위상정렬 할 그래프
const check = Array.from({ length: length + 1 }, () => 0); //위상정렬 들어오는 포인터들 체크할 배열

// 입력값들 처리
for (let i = 0; i < input.length; i++) {
  start[i + 1] = input[i][0]; // 작업시간
  dy[i + 1] = input[i][0];
  for (let k = 2; k < input[i].length; k++) {
    graph[input[i][k]].push(i + 1);
  }
  check[i + 1] = input[i][1];
}

// 시작점들 큐에 넣기
const queue = [];
for (let i = 1; i < check.length; i++) if (!check[i]) queue.push(i);

// 큐에 넣으면서 위상정렬
while (queue.length) {
  const now = queue.shift();

  graph[now].forEach((next) => {
    dy[next] = Math.max(dy[next], dy[now] + start[next]); // 값들 들어갈때마다 dy배열 값 변경
    check[next]--;
    if (!check[next]) queue.push(next); // check배열 인덱스 0됐으면 큐에 넣어주기
  });
}

console.log(Math.max(...dy));
