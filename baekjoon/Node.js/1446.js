const [[N, D], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

const dy = Array.from({ length: 100001 }, (v) => 0);

const hash = {};
input.forEach((v) => {
  const [start, end, cost] = v;
  if (hash.hasOwnProperty(end)) {
    hash[end].push([start, cost]);
  } else {
    hash[end] = [[start, cost]];
  }
});

for (let i = 1; i <= D; i++) {
  if (hash.hasOwnProperty(i)) {
    hash[i].forEach((v) => {
      const [start, cost] = v;
      if (dy[i] !== 0) dy[i] = Math.min(dy[i], dy[start] + cost, dy[i - 1] + 1);
      else dy[i] = Math.min(dy[start] + cost, dy[i - 1] + 1);
    });
  } else {
    dy[i] = dy[i - 1] + 1;
  }
}

console.log(dy[D]);
