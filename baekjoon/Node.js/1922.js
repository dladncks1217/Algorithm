const [[vertices], [edges], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

let answer = 0;

input.sort((a, b) => a[2] - b[2]);

const set = Array.from({ length: vertices }, (v, i) => i);

function find(parent) {
  if (set[parent] === parent) return parent;
  return (set[parent] = find(set[parent]));
}

function union(a, b) {
  const parentA = find(a);
  const parentB = find(b);

  parentA < parentB ? (set[parentB] = parentA) : (set[parentA] = parentB);
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
