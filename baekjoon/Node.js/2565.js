const [[length], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

let lines = [];

input.sort((a, b) => {
  return a[0] - b[0];
});

for (const [a, b] of input) {
  lines.push(b);
}

let dy = Array.from({ length: lines.length }, () => 0);
dy[0] = 1;

for (let i = 1; i < dy.length; i++) {
  let max = 0;
  for (let k = i - 1; k >= 0; k--) {
    if (lines[k] < lines[i] && dy[k] > max) {
      max = dy[k];
    }
  }
  dy[i] = max + 1;
}

console.log(lines.length - Math.max(...dy));
