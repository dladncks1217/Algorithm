// https://programmers.co.kr/learn/courses/30/lessons/92342
function scoreCheck(ryan, apeach) {
  let rscore = 0; // 라이언 점수
  let ascore = 0; // 어피치 점수
  for (let i = 0; i < ryan.length; i++) {
    if (ryan[i] === 0 && apeach[i] === 0) continue; // 둘다 0점이면 0점처리
    if (ryan[i] > apeach[i]) {
      rscore += 10 - i;
    } else {
      ascore += 10 - i;
    }
  }
  return rscore - ascore;
}

function solution(n, info) {
  let answer = [-1];
  let score = Array.from({ length: info.length }, () => 0); // 라이언의 점수
  let check = 0; // 점수차이 확인
  function DFS(L) {
    if (L < 0) return;
    if (L === 0) {
      // 다 쐈을때
      let newcheck = scoreCheck(score, info);
      //   console.log(score);
      if (newcheck >= check && newcheck !== 0) {
        // 새로운게 더 좋은케이스
        check = newcheck;
        answer = score.slice();
      }
    } else {
      for (let i = 0; i < info.length; i++) {
        if (score[i] - info[i] >= 1) return;
        if (info[i] >= score[i]) {
          let arrows = info[i] + 1;
          score[i] += arrows;
          DFS(L - arrows);
          if (L - arrows >= 0) {
            score[10] += L - arrows;
            DFS(0);
            score[10] -= L - arrows;
          }
          score[i] -= arrows;
        }
      }
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]));
