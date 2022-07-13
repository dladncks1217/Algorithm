let [[caseLength], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

const money = []; // 돈들
const coins = []; // 동전들

// 돈들이랑 동전들 정리
input.forEach((v, i) => {
  if ((i + 1) % caseLength === 2) {
    coins.push(v);
  } else if ((i + 1) % caseLength === 0) {
    money.push(...v);
  }
});

console.log(coins, money);

function solution(coins, money) {
  let answer = [];

  money.forEach((v, i) => {
    let dy = Array.from(Array(coins.length), () => Array(v).fill(0));
    dy = dy.map((v) => {
      v[0] = 1;
      return v;
    });
    // 코인들
    for (let j = 0; j < coins.length; j++) {
      // 돈 배열
      for (let k = coins[i][j]; k < money[i]; k++) {
        if (k % coins[i][j] === 0) {
          //   console.log(coins[i][j]);
          dy[i][k] += dy[i][k - coins[i][j]];
        }
      }
    }
    console.log(dy[i][dy[i].length - 1]);
  });
}

solution(coins, money);
