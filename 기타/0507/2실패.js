function solution(queue1, queue2) {
  let answer = 0;
  let count = 0;
  let totallen = queue1.length + queue2.length;
  let totals = [0, 0];
  queue1.forEach((v) => {
    totals[0] += v;
  });
  queue2.forEach((v) => {
    totals[1] += v;
  });

  // if (queue1.length <= 0 || queue2.length <= 0) return -1;

  while (true) {
    if (totallen < count) return -1;
    if (totals[0] > totals[1]) {
      let notundef = 0;
      while (queue1[notundef] === undefined) notundef++;
      queue2.push(queue1[notundef]);
      queue1[notundef] = undefined;
      let len = queue2.length - 1;
      totals[1] += queue2[len];
      totals[0] -= queue2[len];
      count++;
      answer++;
    } else if (totals[0] === totals[1]) {
      break;
    } else {
      let notundef = 0;
      while (queue2[notundef] === undefined) notundef++;
      queue1.push(queue2[notundef]);
      queue2[notundef] = undefined;
      let len = queue1.length - 1;
      totals[0] += queue1[len];
      totals[1] -= queue1[len];
      count++;
      answer++;
    }
  }

  return answer;
}

console.log(solution([3, 2, 7, 2], [4, 6, 5, 1]));
