// https://programmers.co.kr/learn/courses/30/lessons/12978
function solution(N, road, K) {
  let graph = Array.from(Array(N + 1), () => Array());
  let distance = Array.from({ length: N + 1 }, () => Infinity);
  let queue = [];

  for (let [a, b, c] of road) {
    graph[a].push([b, c]);
    graph[b].push([a, c]);
  }
  console.log(graph);
  queue.push([1, 0]);
  distance[1] = 0;
  while (queue.length) {
    const [point, cost] = queue.shift();
    for (let i = 0; i < graph[point].length; i++) {
      const next = graph[point][i][0];
      const nextcost = graph[point][i][1];

      if (distance[next] > distance[point] + nextcost) {
        distance[next] = distance[point] + nextcost;
        queue.push([next, nextcost]);
      }
    }
  }

  distance = distance.filter((v) => v <= K);
  console.log(distance);
  return distance.length;
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
