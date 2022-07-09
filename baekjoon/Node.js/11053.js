const [[length], [...input]] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map((k) => +k);
    return v;
  });

const dy = Array.from({ length: length }, () => 0); // dy 배열

dy[0] = 1;

// 0번인덱스부터 돌면서
for (let i = 0; i < length; i++) {
  let max = 0;
  // 0번인덱스 밑에있는것들 쭉 확인하면서 max값 바꾸기
  for (let k = i - 1; k >= 0; k--) {
    // i가 더 크고 dy[k]가 max변수보다 크면
    if (input[i] > input[k] && dy[k] > max) {
      max = dy[k]; // max 수정
    }
  }
  dy[i] = max + 1; // 실제 max값 변경 (+1)
}

console.log(Math.max(...dy));
