function solution(n, edge) {
  let resultmax;
  let answer = 0;
  let maxNum = edge.flat();
  maxNum = Math.max(...maxNum);
  let graph = Array.from(Array(n + 1), () => Array());
  let check = Array.from({ length: maxNum + 1 }, () => 0);
  let dis = Array.from({ length: maxNum + 1 }, () => 0);
  let queue = [];
  edge.forEach((v) => {
    graph[v[0]].indexOf(v[1]) === -1 ? graph[v[0]].push(v[1]) : ""; // 인접리스트
    graph[v[1]].indexOf(v[0]) === -1 ? graph[v[1]].push(v[0]) : "";
  });

  check[1] = 1;
  queue.push(1);
  dis[1] = 0;
  while (queue.length) {
    let L = queue.shift();
    for (let nL of graph[L]) {
      if (check[nL] === 0) {
        check[nL] = 1;
        queue.push(nL);
        dis[nL] = dis[L] + 1;
      }
    }
  }
  resultmax = Math.max(...dis);
  answer = dis.filter((v) => v === resultmax);
  return answer.length;
}

console.log(
  solution(6, [
    [3, 6],
    [4, 3],
    [3, 2],
    [1, 3],
    [1, 2],
    [2, 4],
    [5, 2],
  ])
);
