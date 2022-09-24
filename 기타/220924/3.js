function solution(users, emoticons) {
  let answer = [];
  let sale = [0.9, 0.8, 0.7, 0.6];
  let salepercent = [10, 20, 30, 40];

  // 이모티콘 할인률별로 나누기
  const emoticonscheck = [];
  for (let i = 0; i < emoticons.length; i++) {
    let temp = []; // 할인률별로 나눈 이모티콘들
    for (let k = 0; k < 4; k++) {
      temp.push([emoticons[i] * sale[k], salepercent[k]]);
    }
    emoticonscheck.push(temp.slice());
    temp = [];
  }
  console.log(emoticonscheck);
  // 유저가 살 이모티콘들 총정리
  for (let k = 0; k < 4; k++) {
    for (let j = 0; j < emoticonscheck.length; j++) {
      const cost = emoticonscheck[j][k][0]; // 이모티콘 가격
      const salerate = emoticonscheck[j][k][1]; // 할인률
      console.log(cost, salerate);

      let join = 0; // 이모티콘플러스 가입
      let money = 0; // 번 돈
      //////////////////////////////////
      for (let i = 0; i < users.length; i++) {
        const [buysale, maxMoney] = users[i]; // 유저정보 정리

        let useMoney = 0; // 사용자가 쓸 돈
        // 유저가 살생각이면
        if (buysale <= salerate) {
          useMoney += cost;
        }
        // 이모티콘플러스 가입여부
        if (useMoney >= maxMoney) join++;
        else money += useMoney;
      }
      //////////////////////////////////
      answer.push([join, money]);
    }
  }

  // 유저별 확인

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
