const [[N], [M], input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

const check = Array.from({ length: 10 }, () => false);
for (let i = 0; i < M; i++) {
  check[input[i]] = true;
}

let result = Math.abs(N - 100);

function DFS(L, curr) {
  if (L === 6) return;
  else {
    // 한자리수 올라갈 때 마다 자릿수 올려주기
    curr *= 10;
    for (let i = 0; i < 10; i++) {
      if (!check[i]) {
        // N에서 올려진 값 + 숫자 + 자리수 누른버튼만큼 vs 기존값
        result = Math.min(result, Math.abs(N - (curr + i)) + L + 1);
        DFS(L + 1, curr + i);
      }
    }
  }
}

DFS(0, 0);

console.log(result);
