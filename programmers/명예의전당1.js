function solution(k, score) {
  let answer = [];

  let left = 0;
  let temp = [];
  for (let day = 0; day < score.length; day++) {
    temp.push(score[day]);
    let check = temp.slice();
    check.sort((a, b) => b - a);
    check = check.slice(0, k);
    answer.push(check[check.length - 1]);
  }

  return answer;
}

console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));
