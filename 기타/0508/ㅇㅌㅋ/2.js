function solution(scores) {
  let answer = Array.from({ length: scores.length }, () => 0);
  let problemScore = [0, 0]; // 문제별 총점
  let hardExist; // 어려운문제 존재 여부

  scores.forEach((v) => {
    // 어려운 문제 걸러내기
    problemScore[0] += v[0];
    problemScore[1] += v[1];
  });

  if (problemScore[0] === problemScore[1]) {
    // 어려운문제 존재 여부
    hardExist = false;
  } else {
    problemScore[0] > problemScore[1] ? (hardExist = 2) : (hardExist = 1);
  }
  console.log(hardExist);
  scores = scores.map((v, i) => {
    // scores에 총점, id 추가
    return [i + 1, ...v, v[0] + v[1]];
  });

  scores.sort((a, b) => {
    if (a[3] === b[3]) {
      if (hardExist) {
        return b[hardExist] - a[hardExist]; // 어려운 문제 정렬
      } else {
        return a[0] - b[0]; // 아이디 정렬
      }
    } else {
      return b[3] - a[3]; // 총점 정렬
    }
  });

  scores.forEach((v, i) => {
    answer[v[0] - 1] = i + 1;
  });

  return answer;
}
