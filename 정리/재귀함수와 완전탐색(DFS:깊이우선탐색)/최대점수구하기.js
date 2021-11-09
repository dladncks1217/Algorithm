function solution(m, ps, pt) {
  let answer = Number.MIN_SAFE_INTEGER;

  function DFS(Level, scoresum, timesum) {
    if (timesum > m) return;
    if (Level === ps.length) {
      answer = Math.max(answer, scoresum);
    } else {
      DFS(Level + 1, scoresum + ps[Level], timesum + pt[Level]);
      DFS(Level + 1, scoresum, timesum);
    }
  }
  DFS(0, 0, 0);
  return answer;
}

let ps = [10, 25, 15, 6, 7];
let pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));
