function solution(v) {
  let answer = "";
  function DFS(v) {
    if (v > 7) return;
    else {
      console.log(v);
      DFS(v * 2);
      DFS(v * 2 + 1);
    }
  }
  DFS(1);
  return answer;
}

console.log(solution(1));
