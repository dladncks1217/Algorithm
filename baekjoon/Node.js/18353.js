const [[N], [...input]] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

let dy = Array.from({ length: input.length }, () => 0);
dy[0] = 1;

for (let i = 1; i < dy.length; i++) {
  let max = 0;
  for (let k = i - 1; k >= 0; k--) {
    if (input[k] > input[i] && dy[k] > max) {
      max = dy[k];
    }
  }
  dy[i] = max + 1;
}

console.log(input.length - Math.max(...dy));
