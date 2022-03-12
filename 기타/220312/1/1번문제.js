function solution(money, costs) {
  let answer = 0;
  let realcost = [1, 5, 10, 50, 100, 500];

  function DFS(checkmoney, answermoney, L) {
    if (L < 0) return;
    if (checkmoney === money) {
      answer = Math.max(answermoney, answer);
    } else {
      // 꽉꽉 눌러담기
      console.log(checkmoney, L, costs[L]);
      while (costs[L] + checkmoney < money) {
        checkmoney += costs[L];
        answermoney += realcost[L];
        DFS(checkmoney, answermoney, L - 1);
      }
    }
  }
  DFS(0, 0, 5);

  return answer;
}

console.log(solution(4578, [1, 4, 99, 35, 50, 1000]));
