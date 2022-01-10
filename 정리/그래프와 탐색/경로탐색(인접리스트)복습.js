function solution(n, arr) {
  let answer = 0;
  let graph = Array.from(Array(n + 1), () => Array());
  let temp = Array.from({ length: n + 1 }, () => 0);
  for ([a, b] of arr) {
    graph[a].push(b);
  }
  function DFS(v) {
    if (v === n) {
      answer++;
      return;
    } else {
      for (let i = 0; i < graph[v].length; i++) {
        if (temp[graph[v][i]] === 0) {
          temp[graph[v][i]] = 1;
          DFS(graph[v][i]);
          temp[graph[v][i]] = 0;
        }
      }
    }
  }
  temp[1] = 1;
  DFS(1);

  return answer;
}

let arr = [
  [1, 2],
  [1, 3],
  [1, 4],
  [2, 1],
  [2, 3],
  [2, 5],
  [3, 4],
  [4, 2],
  [4, 5],
];
console.log(solution(5, arr));
