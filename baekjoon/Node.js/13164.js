let [[N, K], input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

// K개 조로 나눈다 === K-1개의 경계가 필요하다
// -> 각 경계들 다 구하고 큰거부터 다 빼버리기

let answer = input[N - 1] - input[0];

for (let i = N - 1; i >= 1; i--) {
  input[i] = input[i] - input[i - 1];
}

input[0] = 0;
input.sort((a, b) => a - b);

for (let i = N - 1; K > 1; i--, K--) answer -= input[i];
console.log(answer);
