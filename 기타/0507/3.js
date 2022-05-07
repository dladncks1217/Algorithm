function solution(alp, cop, problems) {
  let answer = 0;
  let solved = Array.from({ length: problems.length }, () => 0);

  // 문제들 풀수있는거순으로 정렬
  problems.sort((a, b) => {
    if (a[0] <= alp && a[1] <= cop) return a - b;
    else {
      let needs1 = a[0] - alp + (a[1] - cop);
      let needs2 = b[0] - alp + (b[1] - cop);
      if (needs1 === needs2) return a[4] - b[4];
      return needs1 - needs2;
    }
  });
  console.log(problems);

  // 문제 하나씩 다 풀기
  problems.forEach((v, i) => {
    let success = false;
    while (!success) {
      //   console.log(alp, cop);
      // 문제 풀 수 있으면
      if (v[0] <= alp && v[1] <= cop) {
        success = true;
        answer += v[4];
        alp += v[2];
        cop += v[3];
      } else {
        // 문제 못풀면
        prev = 1;
        if (
          (v[0] < alp && problems[i - prev][2] === 0) ||
          (v[1] < cop && problems[i - prev][3] === 0)
        ) {
          prev++;
        }

        alp += problems[i - prev][2];
        cop += problems[i - prev][3];
        answer += v[4];
      }
    }
  });

  return answer;
}

console.log(
  solution(0, 0, [
    [0, 0, 2, 1, 2],
    [4, 5, 3, 1, 2],
    [4, 11, 4, 0, 2],
    [10, 4, 0, 4, 2],
  ])
);
