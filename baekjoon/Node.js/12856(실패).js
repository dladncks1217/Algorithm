const [aboutBag, ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map((k) => +k);
    return v;
  });

input.sort((a, b) => {
  if (a[0] === b[0]) return a[1] - b[1];
  else return a[0] - b[0];
});

const maxBag = aboutBag[1]; // 가방 최대용량
const dy = Array.from({ length: maxBag + 1 }, () => 0); // dp로 풀이할 메모이제이션으로 써먹을 배열
const check = Array.from({ length: aboutBag[0] }, () => 0); // 탐색 시 재탐색 막을 arr

// for ([a, b] of input) {
//   dy[a] = b;
// }

function DFS(s, weight, prev) {
  if (dy[weight] > 0) {
    return dy[weight];
  }
  if (weight > maxBag) return 0;
  else if (s !== 0 && !dy[weight]) {
    return dy[prev];
  } else {
    for (let i = s; i < input.length; i++) {
      if (s + input[i][0] <= dy.length && check[i] === 0) {
        // 가방용량 넘기지 않게
        if (input[i][0] + weight <= maxBag) {
          check[i] = 1;
          console.log(DFS(s + 1, weight + input[i][0], weight));
          console.log(s, weight, prev, input[i][0], input[i][1]);
          console.log(dy);
          dy[weight + input[i][0]] =
            DFS(s + 1, weight + input[i][0], weight) + input[s][1];

          check[i] = 0;
        }
      }
    }
  }
}

DFS(0, 0, 0);

console.log(dy);
