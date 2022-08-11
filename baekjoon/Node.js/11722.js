const [[length], [...input]] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

let dy = Array.from({ length: input.length }, () => 0);
dy[0] = 1;

for (let i = 0; i < input.length; i++) {
  let max = 0;
  for (let k = 0; k < i; k++) {
    if (input[i] < input[k] && dy[k] > max) {
      max = dy[k];
    }
  }
  dy[i] = max + 1;
}

console.log(Math.max(...dy));
