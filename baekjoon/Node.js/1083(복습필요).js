let [[N], input, [M]] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

for (let i = 0; i < N && 0 < M; i++) {
  let max = -1;
  let index = -1;
  for (let k = i; k < N && k <= i + M; k++) {
    if (max < input[k]) {
      max = input[k];
      index = k;
    }
  }
  for (let j = index; j > i; j--) {
    M--;
    [input[j - 1], input[j]] = [input[j], input[j - 1]];
  }
}

console.log(input.join(" "));
