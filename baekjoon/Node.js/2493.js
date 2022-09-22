const [[N], input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });
const answer = [];
// const stack = [input[0]];
const stack = [];
for (let i = 0; i < N; i++) {
  // 현재 데이터의 인덱스와 값.
  const curr = [i + 1, +input[i]];
  // 만약 스택 비어있으면 curr 스택에 넣고 answer에 0 push
  if (stack.length === 0) {
    stack.push(curr);
    answer.push(0);
    continue;
  }

  // 이미 스택에 들어가있는 값이 현재 확인하려는 값보다 작은경우 (자기보다 큰거 나올때까지 돌기)
  if (stack[stack.length - 1][1] < curr[1]) {
    // 자기보다 큰거 나올때까지 돌기
    while (stack.length) {
      if (stack[stack.length - 1][1] > curr[1]) break;
      else stack.pop();
    }
    // 자기보다 큰거 나오면 그 갯수만큼 출력
    answer.push(!stack.length ? 0 : stack[stack.length - 1][0]);
    stack.push(curr);
  } else {
    // 이미 스택에 있는 값 현재 확인하는 값보다 크면 그냥 푸시.
    answer.push(!stack.length ? 0 : stack[stack.length - 1][0]);
    stack.push(curr);
  }
}

console.log(answer.join(" "));
