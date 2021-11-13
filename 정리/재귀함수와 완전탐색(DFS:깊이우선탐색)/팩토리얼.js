function solution(n) {
  let answer;
  function DFS(L) {
    if (L === 1) {
      return 1;
    } else {
      return L * DFS(L - 1);
    }
  }
  answer = DFS(n);
  return answer;
}

console.log(solution(5));
