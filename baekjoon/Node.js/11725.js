const [[length], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map((v) => +v);
    return v;
  });

const graph = Array.from({ length: length + 1 }, () => []); // 양방향그래프
const check = Array.from({ length: length + 1 }, () => 0); // 부모 확인 겸 체크용

// 양방향그래프 채우기
for (let [a, b] of input) {
  graph[a].push(b);
  graph[b].push(a);
}

let queue = [1];
check[1] = 1;

let head = 0;
let tail = 0;

// bfs
while (head <= tail) {
  const N = queue[head];
  head++;
  for (let next of graph[N]) {
    if (check[next] === 0) {
      check[next] = N;
      queue.push(next);
    }
  }
  tail = queue.length - 1;
}

// 결과
console.log(check.slice(2).join("\n"));
