const [[N, M], [...appByte], [...appCost]] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

let answer = Infinity;
let maxCost = 0;
appCost.forEach((v) => {
  maxCost += v;
});

let dy = Array.from({ length: appCost.length + 1 }, () =>
  Array.from({ length: maxCost + 1 }, () => 0)
);

for (let i = 1; i <= appCost.length; i++) {
  const cost = appCost[i - 1];
  const byte = appByte[i - 1];
  for (let k = 0; k <= maxCost; k++) {
    if (k < cost) {
      dy[i][k] = dy[i - 1][k];
    } else {
      dy[i][k] = Math.max(dy[i - 1][k - cost] + byte, dy[i - 1][k]);
    }
  }
  //   console.log(dy[i]);
}

for (let i = 0; i < dy.length; i++) {
  for (let k = 0; k < dy[0].length; k++) {
    if (dy[i][k] >= M) {
      if (answer > k) {
        answer = k;
        break;
      }
    }
  }
}

console.log(answer);
