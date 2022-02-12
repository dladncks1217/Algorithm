function solution(n, edge) {
  let graph = Array.from({ length: n + 1 }, () => []);
  let check = Array.from({ length: n + 1 }, () => 0);
  let distance = Array.from({ length: n + 1 }, () => 0);
  let queue = [];

  for (let [a, b] of edge) {
    graph[a].push(b);
    graph[b].push(a);
  }

  queue.push(1);
  check[1] = 1;

  while (queue.length) {
    let N = queue.shift();

    for (let nl of graph[N]) {
      if (check[nl] === 0) {
        check[nl] = 1;
        queue.push(nl);
        distance[nl] = distance[N] + 1;
      }
    }
  }
  distance.sort((a, b) => b - a);
  distance = distance.filter((v) => v === distance[0]);
  return distance.length;
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
