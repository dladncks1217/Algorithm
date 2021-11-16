function solution(n, r) {
  let answer = [];
  let arr = Array.from(Array(n + 1), () => Array(r).fill(0));
  function DFS(n, r) {
    if (arr[n][r] > 0) return arr[n][r];
    if (r === 0 || n === r) {
      return 1;
    } else {
      return (arr[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
    }
  }
  answer = DFS(n, r);
  return answer;
}

console.log(solution(33, 19));
