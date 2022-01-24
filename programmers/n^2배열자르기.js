// https://programmers.co.kr/learn/courses/30/lessons/87390
function solution(n, left, right) {
  let answer = [];
  let x = left % n; // x 좌표
  let y = Math.floor(left / n); // y 좌표

  for (let i = 0; i <= right - left; i++) {
    answer.push(Math.max(y, x) + 1);
    if (x + 1 < n) {
      x++;
    } else {
      y++;
      x = 0;
    }
  }
  return answer;
}

console.log(solution(4, 7, 14));

// 1234 2234 3334 4444 와 같은 형태로 저장됨
// 제한사항이 매우 커 배열을 모두 구현할 수 없었음.
// n과 left를 이용하여 좌표를 구할 수 있었음.
// 특정한 좌표의 숫자는 x좌표 또는 y좌표 중 큰 숫자라는 규칙을 이용해 풀 수 있었음.
