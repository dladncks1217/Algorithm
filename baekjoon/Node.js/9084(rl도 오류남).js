// 제출하면 런타임오류뜨는데 데이터 파싱이 문제인거같아보임
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // 입력값들 처리
  let caseLength = +input.shift();

  input = input.map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

  const money = []; // 돈들
  const coins = []; // 동전들

  input.forEach((v, i) => {
    if ((i + 1) % caseLength === 2) {
      coins.push(v);
    } else if ((i + 1) % caseLength === 0) {
      money.push(...v);
    }
  });

  // 실제 계산 함수
  function solution(coins, money) {
    let answer = [];

    money.forEach((v, i) => {
      let coin = coins[i];
      let dy = Array.from({ length: v + 1 }, () => 0);
      dy[0] = 1;
      for (let i = 0; i < coin.length; i++) {
        for (let k = coin[i]; k < v + 1; k++) {
          dy[k] += dy[k - coin[i]];
        }
      }
      // answer.push(dy[dy.length - 1]);
      console.log(dy[dy.length - 1]);
    });
    // return answer.join("\n");
  }

  // console.log(solution(coins, money));
  solution(coins, money);
  process.exit();
});
