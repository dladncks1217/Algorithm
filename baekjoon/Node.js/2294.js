const [[length, money], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

const dy = Array.from({ length: money + 1 }, () => Infinity);
dy[0] = 0;

for (let i = 0; i < length; i++) {
  let coin = input[i];
  for (let k = coin; k < money + 1; k++) {
    dy[k] = Math.min(dy[k], dy[k - coin] + 1);
  }
}

dy[dy.length - 1] !== Infinity
  ? console.log(dy[dy.length - 1])
  : console.log(-1);
