const [[N], NList, [M], MList] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

const answer = [];
const hash = new Map();

NList.forEach((v) => {
  if (hash.has(v)) hash.set(v, hash.get(v) + 1);
  else hash.set(v, 1);
});

MList.forEach((v) => {
  if (hash.has(v)) answer.push(hash.get(v));
  else answer.push(0);
});

console.log(answer.join(" "));
