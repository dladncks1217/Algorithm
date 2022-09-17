const [[N, M, Q], waters, ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

const set = Array.from({ length: N + 1 }, (v, i) => i);
waters.unshift(0);

const unionList = [];
for (let i = 0; i < M; i++) {
  unionList.push(input[i].slice());
}

let visitList = [];
for (let i = M; i < M + Q; i++) {
  visitList.push(...input[i]);
}

function find(parent) {
  if (set[parent] === parent) return parent;
  else return (set[parent] = find(set[parent]));
}

function union(a, b) {
  const parentA = find(a);
  const parentB = find(b);

  parentA < parentB ? (set[parentB] = parentA) : (set[parentA] = parentB);
  if (waters[parentA] !== waters[parentB]) {
    console.log(parentA, parentB);
    waters[parentA] = 0;
    waters[parentB] = 0;
  }
  console.log(waters);
}

unionList.forEach((v) => {
  const [a, b] = v;
  union(a, b);
});

visitList = visitList.map((v) => {
  return waters[v];
});

console.log(waters);
console.log(visitList);
