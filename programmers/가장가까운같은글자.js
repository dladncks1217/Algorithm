function solution(s) {
  const hash = {};
  let answer = [];
  s.split("").forEach((v, i) => {
    if (hash[v] === undefined) {
      answer.push(-1);
      hash[v] = i;
    } else {
      answer.push(i - hash[v]);
      hash[v] = i;
    }
  });

  return answer;
}

console.log(solution("abcda"));
