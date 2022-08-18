const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("");

let answer = 0;
let check = Array.from({ length: input.length }, () => 0);
input.sort();

let str = [];

function DFS(L) {
  if (L === input.length) {
    answer++;
  } else {
    let pre = ""; // 현재 위치 확인용 (DFS탈출해도)
    for (let i = 0; i < input.length; i++) {
      // 아직 안씀 + 해당 부분 같은 문자열 들어가있는지
      if (check[i] === 0 && pre !== input[i]) {
        // 처음 뽑는거 통과시키기 + 인접한 문자 같은 문자인지
        if (L === 0 || str[L - 1] !== input[i]) {
          pre = input[i];
          check[i] = 1;
          str[L] = input[i];
          DFS(L + 1);
          check[i] = 0;
        }
      }
    }
  }
}

DFS(0);
console.log(answer);
