const [[houses], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map((v) => +v);
    return v;
  });

const rInput = input.map((v) => {
  v = v.map((k) => k);
  return v;
});
const gInput = input.map((v) => {
  v = v.map((k) => k);
  return v;
});
const bInput = input.map((v) => {
  v = v.map((k) => k);
  return v;
});

//  R
for (let i = 0; i < houses; i++) {
  if (i === 0) {
    rInput[i][1] = 1001;
    rInput[i][2] = 1001;
    continue;
  }
  rInput[i][0] += Math.min(rInput[i - 1][1], rInput[i - 1][2]);
  rInput[i][1] += Math.min(rInput[i - 1][0], rInput[i - 1][2]);
  rInput[i][2] += Math.min(rInput[i - 1][0], rInput[i - 1][1]);
}

//  G
for (let i = 0; i < houses; i++) {
  if (i === 0) {
    gInput[i][0] = 1001;
    gInput[i][2] = 1001;
    continue;
  }
  gInput[i][0] += Math.min(gInput[i - 1][1], gInput[i - 1][2]);
  gInput[i][1] += Math.min(gInput[i - 1][0], gInput[i - 1][2]);
  gInput[i][2] += Math.min(gInput[i - 1][0], gInput[i - 1][1]);
}

//  B
for (let i = 0; i < houses; i++) {
  if (i === 0) {
    bInput[i][0] = 1001;
    bInput[i][1] = 1001;
    continue;
  }
  bInput[i][0] += Math.min(bInput[i - 1][1], bInput[i - 1][2]);
  bInput[i][1] += Math.min(bInput[i - 1][0], bInput[i - 1][2]);
  bInput[i][2] += Math.min(bInput[i - 1][0], bInput[i - 1][1]);
}
rInput[houses - 1][0] = Infinity;
gInput[houses - 1][1] = Infinity;
bInput[houses - 1][2] = Infinity;

console.log(
  Math.min(...rInput[houses - 1], ...gInput[houses - 1], ...bInput[houses - 1])
);
