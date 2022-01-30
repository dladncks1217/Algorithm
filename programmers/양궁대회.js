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
    if (L === n) {
      // 다 쐈을때
      let newcheck = scoreCheck(score, info);
      if (newcheck >= check) {
        check = newcheck;
        answer = score.slice();
      }
    } else {
      for (let i = 0; i < info.length; i++) {
        if (score[i] - info[i] >= 1) return;
        if (info[i] >= score[i]) {
          score[i] += 1;
          DFS(L + 1);
          score[i] -= 1;
        }
      }
    }
  }
  DFS(0);
  return answer;
}

console.log(solution(1, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));
