function solution(N, road, K) {
  let answer = 0;
  let graph = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
  let check = Array.from({ length: N + 1 }, () => 0);
  let result = Array.from({ length: N + 1 }, () => false);

  for (let [a, b, c] of road) {
    graph[a][b] = c;
    graph[b][a] = c;
  }

  check[N] = 1;
  function DFS(point, end, sum) {
    if (sum > K) return;
    if (point === end && sum <= K && result[point] === false) {
      result[point] = true;
      console.log(point);
      answer++;
    } else {
      for (let i = 1; i <= N; i++) {
        if (graph[point][i] !== 0 && check[point] === 0) {
          check[point] = 1;
          DFS(i, end, sum + graph[point][i]);
          check[point] = 0;
        }
      }
    }
  }

  for (let i = 2; i <= 5; i++) {
    DFS(1, i, 0);
  }

  console.log(graph);
  return answer + 1;
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
