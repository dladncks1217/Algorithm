function solution(n, edge) {
  let answer = 0;
  let route = 0;
  let max = 0;
  let nodeCheck = Array.from({ length: n + 1 }, () => 0);
  let graph = Array.from(Array(n + 1), () => Array());
  let temp = Array.from({ length: n + 1 }, () => 0);

  for ([aa, bb] of edge) {
    aa < bb ? graph[aa].push(bb) : graph[bb].push(aa);
  }

  function DFS(v) {
    for (let i = 0; i < graph[v].length; i++) {
      if (temp[graph[v][i]] === 0 && nodeCheck[graph[v][i]] === 0) {
        temp[graph[v][i]] = 1;
        route++;
        nodeCheck[graph[v][i]] = route;
        DFS(graph[v][i]);
        temp[graph[v][i]] = 0;
        route--;
      }
    }
  }
  temp[1] = 1;
  DFS(1);
  max = Math.max(...nodeCheck);
  nodeCheck.forEach((v) => {
    if (v === max) answer++;
  });
  return answer;
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
