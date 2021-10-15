function solution(n, left, right) {
  let answer = [];
  let startpointheight = Math.floor(left / n);
  let startpointlength = left % n;

  for (let i = 0; i <= right - left; i++) {
    console.log(startpointheight, startpointlength);
    answer.push(Math.max(startpointheight, startpointlength) + 1);
    if (startpointlength + 1 < n) {
      startpointlength++;
    } else {
      startpointheight++;
      startpointlength = 0;
    }
  }
  return answer;
}

console.log(solution(4, 7, 14));
