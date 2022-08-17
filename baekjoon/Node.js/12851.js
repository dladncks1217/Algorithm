const [subin, sister] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

if (subin === sister) {
  console.log(0);
  console.log(1);
} else {
  let queue = [];
  queue.push([subin, 0]);

  let answer = [0, 0];

  let dist = Array(100001).fill(0);
  let count = Array(100001).fill(0);
  count[subin] = 1;

  let foundLevel = false;

  while (queue.length > 0) {
    let now = queue.shift();

    let [state, level] = now; // 큐에있는거 빼오기

    // 이미 찾은상태면 종료
    if (foundLevel && level > answer[0]) {
      break;
    }

    if (!foundLevel) {
      // +1, -1, *2일때 모두 계산, filter로 범위 벗어나는거 걸러내기
      const next = [state + 1, state - 1, state * 2].filter(
        (v) => v >= 0 && v <= 100000
      );
      // filter로 걸러진 값들 bfs
      next.forEach((v) => {
        //
        if (dist[v] === 0) {
          queue.push([v, level + 1]);
          dist[v] = dist[state] + 1;
          count[v] += count[state];
        } else if (dist[v] == dist[state] + 1) {
          count[v] += count[state];
        }
      });
    }
  }

  console.log(dist[sister]);
  console.log(count[sister]);
}
