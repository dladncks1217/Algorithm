function solution(n, r) {
  let answer = 0;
  let temp = Array.from(Array(n + 1), () => Array(r).fill(0));
  function DFS(n, r) {
    if (temp[n][r] > 0) return temp[n][r];
    if (r === 0 || n === r) {
      return 1;
    } else {
      return (temp[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
    }
  }
  answer = DFS(n, r);
  return answer;
}

console.log(solution(33, 19));
