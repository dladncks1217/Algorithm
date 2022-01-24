function solution(N, road, K) {
  let graph = Array.from(Array(N + 1), () => Array(N + 1).fill(0));
  let distance = Array.from({ length: N + 1 }, () => distance);
  let check = Array.from({ length: N + 1 }, () => 0);
  let queue = [];

  for (let [a, b, c] of road) {
    if (graph[a][b] > c && graph[a][b] !== 0) graph[a][b] = c;
    if (graph[b][a] > c && graph[b][a] !== 0) graph[b][a] = c;
    if (graph[a][b] === 0) graph[a][b] = c;
    if (graph[b][a] === 0) graph[b][a] = c;
  }

  queue.push([1, 0]);
  distance[1] = 0;

  while (queue.length) {
    const [town, cost] = queue.shift();
    for(let i = 0;i<N;i++){
      
    }
  }
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
