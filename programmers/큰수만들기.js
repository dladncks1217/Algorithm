function solution(number, k) {
  let answer = [];

  for (let i = 0; i < number.length; i++) {
    while (k > 0 && answer[answer.length - 1] < number[i]) {
      answer.pop();
      k--;
    }
    answer.push(number[i]);
  }
  answer = answer.join("").slice(0, number.length - k);
  return answer;
}

console.log(solution("1924", 2));
