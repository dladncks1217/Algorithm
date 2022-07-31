function solution(n, times) {
  let answer = 0;
  let min = 1;
  let max = Math.max(...times) * n;

  while (max >= min) {
    let mid = Math.floor((min + max) / 2);
    console.log(mid);
    let sum = 0;
    for (let i = 0; i < times.length; i++) {
      if (Math.floor(mid / times[i]) > 0) {
        sum += Math.floor(mid / times[i]);
      }
    }
    if (sum < n) {
      min = mid + 1;
    } else {
      max = mid - 1;
      answer = mid;
    }
  }

  return answer;
}

console.log(solution(6, [7, 10]));
