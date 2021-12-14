function solution(test) {
  let answer = 0;
  let student = test[0].length;
  let tests = test.length;
  for (let i = 1; i <= student; i++) {
    // 멘토가 될 학생
    for (let j = 1; j < student; j++) {
      // 멘티가 될 학생
      let count = 0;
      for (let k = 0; k < tests; k++) {
        let menti = 0;
        let mento = 0;
        for (let s = 0; s < student; s++) {
          if (test[k][s] === i) menti = i;
          if (test[k][s] === j) mento = j;
        }
        if (menti < mento) count++;
      }
      if (count === tests) answer++;
    }
  }

  return answer;
}

console.log(
  solution([
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
);
