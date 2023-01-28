function solution(n) {
  let answer = 0;
  ("" + n).split("").forEach((v) => (answer += Number(v)));
  return answer;
}
