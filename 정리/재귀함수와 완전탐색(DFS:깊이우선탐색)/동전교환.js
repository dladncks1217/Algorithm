function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER;
  function DFS(L, sum) {
    if (sum > 15) return;
    if (L > answer) return;
    if (sum === 15) {
      answer = Math.min(answer, L);
    } else {
      for (let i = 0; i < m; i++) {
        DFS(L + 1, sum + arr[i]);
      }
    }
  }
  DFS(0, 0);
  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
