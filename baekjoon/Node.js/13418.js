const [[N, M], ...minimumInput] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

const maximumInput = minimumInput.map((v) => v.slice());

let min = 0;
let max = 0;
const minSet = Array.from({ length: N + 1 }, (_, i) => i);
const maxSet = Array.from({ length: N + 1 }, (_, i) => i);

minimumInput.sort((a, b) => b[2] - a[2]);
maximumInput.sort((a, b) => a[2] - b[2]);

function find(a, set) {
  if (set[a] === a) return a;
  return (set[a] = find(set[a], set));
}

function union(a, b, set) {
  const [parentA, parentB] = [find(a, set), find(b, set)];
  parentA < parentB ? (set[parentB] = parentA) : (set[parentA] = parentB);
}

function checkCycle(a, b, set) {
  const [parentA, parentB] = [find(a, set), find(b, set)];
  if (parentA === parentB) return true;
  return false;
}

for (const [a, b, isUphill] of maximumInput) {
  if (!checkCycle(a, b, maxSet)) {
    union(a, b, maxSet);
    if (isUphill === 0) max++;
  }
}

for (const [a, b, isUphill] of minimumInput) {
  if (!checkCycle(a, b, minSet)) {
    union(a, b, minSet);
    if (isUphill === 0) min++;
  }
}

console.log(max * max - min * min);
