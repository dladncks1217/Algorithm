// 9084와 같은문제
let fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().split("\n");
let t = +input.shift();

for (let i = 0; i < t; i++) {
  let num = +input.shift();
  let coins = input.shift().toString().split(" ").map(Number);
  let money = +input.shift();

  let dp = Array.from({ length: money + 1 }, () => 0);

  dp[0] = 1;

  for (let j = 0; j < num; j++) {
    for (let k = coins[j]; k <= money; k++) {
      dp[k] += dp[k - coins[j]];
    }
  }

  console.log(dp[money]);
}
