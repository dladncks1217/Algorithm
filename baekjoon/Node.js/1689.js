const [[N], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

let answer = 0;
let arr = [];
for (const v of input) {
  arr.push([v[0], 1]);
  arr.push([v[1], -1]);
}

arr.sort((a, b) => {
  if (a[0] === b[0]) return a[1] - b[1];
  return a[0] - b[0];
});

let count = 0;
for (let i = 0; i < arr.length; i++) {
  count += arr[i][1];

  answer = Math.max(answer, count);
}

console.log(answer);
