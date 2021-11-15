function solution(n, r) {
  let answer = [];
  let checks = Array.from(Array(n + 1), () => Array(r).fill(0));

  function DFS(n, r) {
    if (checks[n][r] > 0) return checks[n][r];
    if (r === 0 || n === r) {
      return 1;
    } else {
      return (checks[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
    }
  }
  answer = DFS(n, r);
  return answer;
}

console.log(solution(33, 19));
