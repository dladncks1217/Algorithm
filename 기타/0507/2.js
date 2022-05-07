function solution(queue1, queue2) {
  let answer = 0;
  let lt = 0;
  let rt = queue1.length;
  let queue = [...queue1, ...queue2];
  let totals = [0, 0];
  queue1.forEach((v) => {
    totals[0] += v;
  });
  queue2.forEach((v) => {
    totals[1] += v;
  });

  if (queue1.length <= 0 || queue2.length <= 0) return -1;

  while (true) {
    if (total[0] < total[1]) {
      rt++;
    }
  }

  return answer;
}

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1]));
