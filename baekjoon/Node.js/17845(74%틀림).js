const [[maxStudy, length], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

let answer = 0;
let dy = Array.from({ length: length }, () =>
  Array.from({ length: maxStudy + 1 }).fill(0)
);
// let dy = Array.from({ length: 1001 }, () =>
//   Array.from({ length: 10001 }).fill(0)
// );

for (let i = 1; i < length; i++) {
  const [importRate, needTime] = input[i];

  for (let k = 1; k <= maxStudy; k++) {
    if (needTime > k) dy[i][k] = dy[i - 1][k];
    else
      dy[i][k] = Math.max(dy[i - 1][k], dy[i - 1][k - needTime] + importRate);
    answer = Math.max(answer, dy[i][k]);
  }
}

// console.log(dy[dy.length - 1][dy[0].length - 1]);
// console.log(dy[length][maxStudy]);
console.log(answer);
