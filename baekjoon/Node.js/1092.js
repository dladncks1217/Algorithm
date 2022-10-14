const [[N], cranes, [M], input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

input.sort((a, b) => a - b);
let answer = 0;

const visited = Array.from({ length: M }, () => 0);
// 다 끝낼 수 있는지
let canFinish = true;

// 이미 옮겨진거
let moved = 0;

while (moved < M) {
  // 현재까지 옮겨진것들
  let currMoved = moved;

  for (let i = 0; i < N; i++) {
    // 크레인 크기
    const crane = cranes[i];
    // 옮길 물건 인덱스
    let idx = -1;
    for (let k = 0; k < M; k++) {
      if (input[k] <= crane && visited[k] === 0) idx = k;
      else if (input[k] > crane) break;
    }
    if (idx > -1) {
      // 움직인거 체크
      visited[idx] = 1;
      // 하나 움직였으니깐
      moved++;
    }
  }

  // 더 옮길수 없는 상황
  if (currMoved === moved) {
    canFinish = false;
    break;
  }
  answer++;
}

canFinish === false ? console.log(-1) : console.log(answer);
