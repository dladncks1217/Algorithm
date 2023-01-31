const [[N, M], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

input.sort((a, b) => a[2] - b[2]);

const isConnected = new Set();
const set = Array.from({ length: N + 1 }, (v, i) => i);
let answer = 0;
let sum = 0;

function find(a) {
  if (set[a] === a) return a;
  return (set[a] = find(set[a]));
}

function union(a, b) {
  const parentA = find(a);
  const parentB = find(b);

  parentA < parentB ? (set[parentB] = parentA) : (set[parentA] = parentB);
}

function isCycle(a, b) {
  const parentA = find(a);
  const parentB = find(b);

  return parentA === parentB ? true : false;
}

for (const [a, b, cost] of input) {
  sum += cost;
  if (!isCycle(a, b)) {
    union(a, b);
    answer += cost;
  }
}

set.forEach((v, i) => {
  find(i);
  isConnected.add(set[i]);
});

isConnected.size === 2 ? console.log(sum - answer) : console.log(-1);
