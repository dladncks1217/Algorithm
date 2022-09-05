const [length, ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

let dist = [];

for (let i = 0; i < input.length; i++) {
  const [x1, y1] = input[i];
  for (let k = i + 1; k < input.length; k++) {
    const [x2, y2] = input[k];
    let a = Number(Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2).toFixed(2));
    dist.push([i, k, a]);
  }
}

dist.sort((a, b) => a[2] - b[2]);

const set = Array.from({ length: dist.length }, (v, i) => i);

function find(parent) {
  if (set[parent] === parent) return parent;
  return (set[parent] = find(set[parent]));
}

function union(a, b) {
  const parentA = find(a);
  const parentB = find(b);

  parentA > parentB ? (set[parentA] = parentB) : (set[parentB] = parentA);
}

function findParent(a, b) {
  const parentA = find(a);
  const parentB = find(b);
  if (parentA === parentB) return true;
  return false;
}

let answer = 0;
for (const v of dist) {
  const [vertices1, vertices2, cost] = v;
  if (!findParent(vertices1, vertices2)) {
    answer += cost;

    union(vertices1, vertices2);
  }
}

console.log(answer);
