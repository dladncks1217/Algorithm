function solution(N, road, K) {
  let graph = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
  let check = Array.from({ length: N + 1 }, () => 0);

  let queue = [];

  for (let [a, b, c] of road) {
    if (graph[a][b] > c && graph[a][b] !== 0) graph[a][b] = c;
    if (graph[b][a] > c && graph[b][a] !== 0) graph[b][a] = c;
    if (graph[a][b] === 0) graph[a][b] = c;
    if (graph[b][a] === 0) graph[b][a] = c;
  }

  for (let i = 0; i < road.length; i++) {
    if (graph[1][i] <= K && graph[1][i] > 0) {
      queue.push([1, i]);
      check[i] = 1;
    }
  }

  while (queue.length) {
    let L = queue.shift();

    let prev = L[0];
    let now = L[1];
    for (let i = 0; i <= N; i++) {
      if (
        check[i] === 0 &&
        graph[now][i] > 0 &&
        graph[prev][now] + graph[now][i] <= K
      ) {
        queue.push([now, i]);
        check[i] = 1;
        graph[now][i] += graph[prev][now];
      }
    }
  }
  check = check.filter((v) => v === 1);
  return check.length;
}

console.log(
  solution(
    6,
    [
      [1, 2, 1],
      [1, 3, 2],
      [2, 3, 2],
      [3, 4, 3],
      [3, 5, 2],
      [3, 5, 3],
      [5, 6, 1],
    ],
    4
  )
);
