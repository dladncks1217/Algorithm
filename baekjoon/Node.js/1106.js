const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let [inputs, ...casesBeforeNormalize] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");
const [C, N] = inputs.split(" ").map(Number);
const cases = casesBeforeNormalize.map((i) => i.split(" ").map(Number));
function solution(C, N, cases) {
  const sortedCases = cases.sort((a, b) => a[0] - b[0]);
  const dp = Array(C + 1).fill(Infinity);
  dp[0] = 0;
  for (let [cost, customN] of sortedCases) {
    if (dp[customN] > cost) dp[customN] = cost;
    for (let i = 1; i <= C; i += 1) {
      dp[i] =
        i < customN
          ? Math.min(dp[i], cost)
          : Math.min(dp[i], dp[customN] + dp[i - customN]);
    }
  }
  console.log(dp[C]);
}
solution(C, N, cases);
