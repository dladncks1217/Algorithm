const [[N, M, K], equipments, ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

let answer = 0;

const set = Array.from({ length: N + 1 }, (v, i) => i);
input.sort((a, b) => a[2] - b[2]);

for (let i = 0; i < K; i++) {
  set[equipments[i]] = -1;
}

function find(a) {
  if (set[a] === a) return a;
  return (set[a] = find(set[a]));
}

function union(a, b) {
  const parentA = find(a);
  const parentB = find(b);

  parentA > parentB ? (set[parentA] = parentB) : (set[parentB] = parentA);
}

function checkCycle(a, b) {
  const parentA = find(a);
  const parentB = find(b);
  if (parentA === parentB) return true;
  return false;
}

for (const v of input) {
  const [vertices1, vertices2, cost] = v;
  if (!checkCycle(vertices1, vertices2)) {
    answer += cost;
    union(vertices1, vertices2);
  }
}

console.log(answer);
