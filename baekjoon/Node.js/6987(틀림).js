const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

// 결과 확인 함수
function solution(result) {
  let winNum = 0;
  let loseNum = 0;
  // 승리 수 5 넘어가는거 있는지
  for (let i = 0; i < result.length; i += 3) {
    winNum += result[i];
    if (result[i] > 5 || result[i] < 0) {
      return 0;
    }
  }

  // 패배 수 5 넘어가는거 있는지
  for (let i = 2; i < result.length; i += 3) {
    loseNum += result[i];
    if (result[i] > 5 || result[i] < 0) {
      return 0;
    }
  }

  // 승리 패배 수 같은지
  if (winNum !== loseNum) return 0;

  let drawCount = 0;
  let drawLength = 0;

  // 무승부 길이, 총 값 확인
  for (let i = 1; i < result.length; i += 3) {
    drawCount += result[i];
    if (result[i] > 0) {
      drawLength++;
    }
  }

  // 무승부 값들 확인
  if (drawLength % 2 !== 0) return 0;
  if (drawCount % 2 !== 0) return 0;

  return 1;
}

let answer = [];
input.forEach((v) => {
  answer.push(solution(v));
});

console.log(answer.join(" "));
