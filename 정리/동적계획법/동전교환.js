function solution(coin, money) {
  answer = 0;
  let dy = Array.from({ length: money + 1 }, () => money * 2);
  dy[0] = 0;
  // 일단 동전 종류만큼 돌 예정
  for (let i = 0; i < coin.length; i++) {
    for (let j = coin[i]; j < dy.length; j++) {
      // dy에서 확인할 dy[값 - 몇단위인지] + 1 (그 단위 코인 하나 쓴거라서)
      // 중 작은값으로 넣어주기.
      dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
    }
    console.log(dy);
  }
  answer = dy[dy.length - 1];
  return answer;
}

console.log(solution([1, 2, 5], 15));
