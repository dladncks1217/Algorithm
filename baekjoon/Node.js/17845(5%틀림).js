const [[maxStudy, length], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });
input.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
});

let dy = Array.from({ length: length }, () =>
  Array.from({ length: maxStudy + 1 }).fill(0)
);
// let dy = Array.from({ length: 1001 }, () =>
//   Array.from({ length: 10001 }).fill(0)
// );

if (length > 1) {
  const [importRate, needTime] = input[0];
  for (let i = needTime; i < dy[0].length; i++) {
    dy[0][i] = Math.max(dy[0][i], dy[0][i - needTime] + importRate);
  }
}

for (let i = 1; i < length; i++) {
  const [importRate, needTime] = input[i];
  for (let k = needTime; k < dy[i].length; k++) {
    dy[i][k] = Math.max(dy[i - 1][k], dy[i - 1][k - needTime] + importRate);
  }
}

console.log(dy[dy.length - 1][dy[0].length - 1]);
