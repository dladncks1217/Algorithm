const [[N], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

let answer = 0;

const arr = [];
for (let i = 0; i < N; i++) {
  for (let k = i + 1; k < N; k++) {
    arr.push([i, k, input[i][k]]);
  }
}

arr.sort((a, b) => a[2] - b[2]);

const set = Array.from({ length: N }, (v, i) => i);

function find(parent) {
  if (set[parent] === parent) return parent;
  else return (set[parent] = find(set[parent]));
}

function union(a, b) {
  const parentA = find(a);
  const parentB = find(b);

  parentA > parentB ? (set[parentA] = parentB) : (set[parentB] = parentA);
}

function cycleCheck(a, b) {
  const parentA = find(a);
  const parentB = find(b);
  if (parentA === parentB) return true;
  else return false;
}

for (const v of arr) {
  const [vertices1, vertices2, cost] = v;
  if (!cycleCheck(vertices1, vertices2)) {
    union(vertices1, vertices2);
    answer += cost;
  }
}

console.log(answer);
