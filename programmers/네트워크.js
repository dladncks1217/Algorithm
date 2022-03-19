// https://programmers.co.kr/learn/courses/30/lessons/43162
function solution(n, computers) {
  let answer = 0;
  let check = Array.from({ length: n }, () => 0);

  function DFS(index) {
    check[index] = 1;
    for (let i = 0; i < computers[index].length; i++) {
      if (!check[i] && computers[index][i]) {
        DFS(i);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!check[i]) {
      answer++;
      DFS(i);
    }
  }

  return answer;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);
