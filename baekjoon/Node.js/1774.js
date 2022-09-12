const [[N, M], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

const dist = [];
const linked = [];

for (let i = 0; i < M; i++) {
  linked.push(input.pop());
}

let length = input.length;

for (let i = 0; i < input.length; i++) {
  for (let k = i + 1; k < input.length; k++) {
    const [x1, y1] = input[i];
    const [x2, y2] = input[k];
    let check = Number(Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2));
    dist.push([i, k, check]);
  }
}

dist.sort((a, b) => a[2] - b[2]);

const set = Array.from({ length: length }, (v, i) => i);

function find(parent) {
  if (set[parent] === parent) return parent;
  else return (set[parent] = find(set[parent]));
}

function union(a, b) {
  const parentA = find(a);
  const parentB = find(b);
  parentA < parentB ? (set[parentB] = parentA) : (set[parentA] = parentB);
}

function isCycle(a, b) {
  const parentA = find(a);
  const parentB = find(b);
  if (parentA === parentB) return true;
  return false;
}

for (let i = 0; i < linked.length; i++) {
  const [vertices1, vertices2, cost] = linked[i];
  union(vertices1 - 1, vertices2 - 1);
}

let answer = 0;
for (let i = 0; i < dist.length; i++) {
  const [vertices1, vertices2, cost] = dist[i];

  if (!isCycle(vertices1, vertices2)) {
    answer += cost;

    union(vertices1, vertices2);
  }
}

console.log(answer.toFixed(2));
