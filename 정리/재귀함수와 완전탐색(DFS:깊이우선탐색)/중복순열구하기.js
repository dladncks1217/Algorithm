function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);
  function DFS(Level) {
    if (Level === m) {
      answer.push(tmp.slice());
      return;
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[Level] = i;
        DFS(Level + 1);
      }
    }
  }
  DFS(0);
  return answer;
}
console.log(solution(3, 2));
