function solution(n) {
  let answer = 0;
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum = 0;
    for (let k = i; k <= n; k++) {
      sum += k;
      if (sum === n) {
        answer++;
        break;
      } else if (sum > n) {
        sum -= k;
        break;
      }
    }
  }
  return answer;
}

console.log(solution(15));
