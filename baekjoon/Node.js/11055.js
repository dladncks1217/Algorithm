const [[length], [...input]] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

const dy = Array.from({ length: length }, () => 0);
dy[0] = input[0];

for (let i = 0; i < dy.length; i++) {
  let max = 0;
  for (let k = i - 1; k >= 0; k--) {
    if (input[i] > input[k] && dy[k] > max) {
      max = dy[k];
    }
  }
  dy[i] = max + input[i];
}

console.log(Math.max(...dy));
