const [[N], input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

const dy = Array.from({ length: N + 1 }, () => 0);

let max = 0;

for (let i = 1; i <= N; i++) {
  const inputValue = input[i - 1];
  dy[inputValue] = dy[inputValue - 1] + 1;
  max = Math.max(max, dy[inputValue]);
}

console.log(N - max);
