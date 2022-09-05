let [[N, M], MW, ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ");
    return v;
  });

let answer = 0;
let count = 0;

input = input.map((v) => {
  return [+v[0], +v[1], +v[2]];
});

input.sort((a, b) => a[2] - b[2]);

let set = Array.from({ length: +N }, (v, i) => i);

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
    if (MW[vertices1 - 1] !== MW[vertices2 - 1]) {
      answer += cost;
      union(vertices1, vertices2);
      count++;
    }
  }
}

count >= +N - 1 ? console.log(answer) : console.log(-1);
