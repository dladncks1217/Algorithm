function solution(n, student, point) {
  let answer = 0;
  const CLASS_LENGTH = n / 2; // 우 열 반에 들어갈 수 있는 최대 학생
  const studentPoints = Array.from({ length: n + 1 }, (v, i) => [i, 0]);
  studentPoints.shift();
  for (let i = 0; i < student.length; i++) {
    let nowIndex = 0; // 현재 탐색될 인덱스 번호
    let changedIndex = 0; // 정렬 후 탐색될 인덱스 번호

    // 현재 인덱스 찾기
    for (let k = 0; k < studentPoints.length; k++) {
      //   console.log(studentPoints[k][0], student[k]);
      if (studentPoints[k][0] === student[i]) {
        nowIndex = k;
        break;
      }
    }

    studentPoints[nowIndex][1] += point[i];

    studentPoints.sort((a, b) => {
      if (a[1] === b[1]) return a[0] - b[0];
      return b[1] - a[1];
    });

    // 정렬 후 인덱스 찾기
    for (let k = 0; k < studentPoints.length; k++) {
      if (studentPoints[k][0] === student[i]) {
        changedIndex = k;
        break;
      }
    }

    if (nowIndex < CLASS_LENGTH && changedIndex >= CLASS_LENGTH) answer++;
    else if (nowIndex >= CLASS_LENGTH && changedIndex < CLASS_LENGTH) answer++;
    // console.log(nowIndex, changedIndex);
    // console.log(studentPoints, answer);
  }

  return answer;
}

console.log(
  solution(10, [3, 2, 10, 2, 8, 3, 9, 6, 1, 2], [3, 2, 2, 5, 4, 1, 2, 1, 3, 3])
);
