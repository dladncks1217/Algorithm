const [M, N] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

let dy = Array.from(Array(M + 1), () => Array(N).fill(0));

function DFS(M, N) {
  if (dy[M][N] > 0) return dy[M][N];
  if (N === 0 || M === N) return 1;
  else {
    return (dy[M][N] = DFS(M - 1, N - 1) + DFS(M - 1, N));
  }
}
console.log(BigInt(DFS(M, N)));
