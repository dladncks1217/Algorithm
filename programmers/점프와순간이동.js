// https://programmers.co.kr/learn/courses/30/lessons/12980
function solution(n) {
  let answer = Number.MAX_SAFE_INTEGER;
  function DP(dist, energy) {
    if (dist === 0) return (answer = Math.min(answer, energy));
    // 짝수면
    if (dist % 2 === 0) {
      return DP(dist / 2, energy);
    } else return DP(dist - 1, energy + 1);
  }
  DP(n, 0);
  return answer;
}

console.log(solution(6));
