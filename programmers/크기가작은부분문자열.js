function solution(t, p) {
  const len = p.length;
  p = +p;

  let answer = 0;
  let left = 0;

  while (left + len <= t.length) {
    const num = +t.slice(left, left + len);
    if (num <= p) answer++;

    left++;
  }

  return answer;
}

console.log(solution("10203", "15"));
