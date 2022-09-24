function solution(users, emoticons) {
  let answer = [];
  let sale = [0.9, 0.8, 0.7, 0.6];
  let salepercent = [10, 20, 30, 40];

  // 세일 모두 비교
  sale.forEach((rate, j) => {
    let join = 0; // 이모티콘플러스 가입
    let money = 0; // 번 돈

    // 유저별 확인
    for (let i = 0; i < users.length; i++) {
      const [buysale, maxMoney] = users[i]; // 유저정보 정리

      let useMoney = 0; // 사용자가 쓸 돈
      // 이모티콘들 정리
      for (let k = 0; k < emoticons.length; k++) {
        // console.log(salepercent);
        if (salepercent[j] >= buysale) {
          saleEmoticon = emoticons[k] * rate; // 이모티콘 가격
          useMoney += saleEmoticon; // 이모티콘 구매
          console.log(buysale, maxMoney, useMoney, salepercent[j]);
        }
      }

      // 이모티콘플러스 가입여부
      if (useMoney >= maxMoney) join++;
      else money += useMoney;
    }
    answer.push([join, money]);
  });

  return answer;
}

console.log(
  solution(
    [
      [40, 10000],
      [25, 10000],
    ],
    [7000, 9000]
  )
);
