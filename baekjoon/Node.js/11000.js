let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");
input.shift();

const times = [];

input.forEach((v) => {
  v = v.split(" ");
  v = v.map((v) => parseInt(v));
  times.push([v[0], 1]);
  times.push([v[1], -1]);
});

times.sort((a, b) => {
  if (a[0] === b[0]) return a[1] - b[1];
  return a[0] - b[0];
});

let answer = 0;
let result = 0;

for (let i = 0; i < times.length; i++) {
  result += times[i][1];
  answer = Math.max(result, answer);
}

console.log(answer);
