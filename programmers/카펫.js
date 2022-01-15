function solution(brown, yellow) {
  let answer = [];
  let all = brown + yellow;
  for (let i = 3; i < brown; i++) {
    if (all % i === 0) {
      answer[0] = i;
      answer[1] = all / i;
    }
    if (i + i + (answer[1] - 2) * 2 === brown) {
      answer.sort((a, b) => b - a);
      return answer;
    }
  }
}
ㅔ;
