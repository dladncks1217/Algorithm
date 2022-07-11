// 입력값 길이, 삼각형 배열로
const [[length], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

// dp풀이에 써먹을 배열
const dy = input.map((v) => v.slice());

for (let i = 1; i < length; i++) {
  for (let k = 0; k <= i; k++) {
    let prev;
    // 맨 끝에있는경우 (0번)
    if (k === 0) {
      prev = dy[i - 1][k];
      // 맨 끝에있는경우 (끝번)
    } else if (i === k) {
      prev = dy[i - 1][k - 1];
      // 그거아닌경우
    } else {
      prev = Math.max(dy[i - 1][k - 1], dy[i - 1][k]);
    }
    // 이전 최대값에서 현재값 더하기
    dy[i][k] += prev;
  }
}

console.log(Math.max(...dy[length - 1]));
