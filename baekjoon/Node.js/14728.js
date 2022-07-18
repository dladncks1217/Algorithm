const [[length, resultTime], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

let dy = Array.from({ length: resultTime + 1 }, () => 0);

for (let i = 0; i < length; i++) {
  let [time, score] = input[i];
  for (let k = resultTime; k >= time; k--) {
    dy[k] = Math.max(dy[k], dy[k - time] + score);
  }
}

console.log(dy[dy.length - 1]);
