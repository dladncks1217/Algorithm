function solution(salaries, days) {
  let answer = 0;
  salaries.forEach((v) => {
    let daycheck = Math.floor(days / v[0]);
    if (days % v[0] !== 0) {
      answer += v[1] * daycheck + v[1];
    } else {
      answer += v[1] * daycheck;
    }
  });

  return answer;
}
