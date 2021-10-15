function solution(n, left, right) {
  let answer = [];
  let target = 1;
  let startpoint = 0;
  for (let i = 1; i <= right; i++) {
    target = i;
    for (let k = 0; k < n; k++) {
      startpoint++;
      if (target <= k && target < n) {
        target++;
      }
      if (startpoint >= left + 1 && startpoint <= right + 1) {
        answer.push(target);
      }
    }
  }
  return answer;
}

console.log(solution(3, 2, 5));
