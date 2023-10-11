function solution(targets) {
  let answer = 1;

  targets.sort((a, b) => {
    return a[1] - b[1];
  });

  let min = targets[0][0];
  let max = targets[0][1];

  for (let i = 1; i < targets.length; i++) {
    const nowMin = targets[i][0];
    const nowMax = targets[i][1];
    if (max <= nowMin) {
      // 최대값이 다음 미사일의 위치와 겹치거나 아예 멀어질때

      answer++;
      min = targets[i][0];
      max = targets[i][1];
    }
    if (min < nowMin) {
      // 더 범위가 좁아질떄
      min = nowMin;
    }
    if (max > nowMax) {
      // 범위가 좁아질 때
      max = nowMax;
    }
  }

  return answer;
}
