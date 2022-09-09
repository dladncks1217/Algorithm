const [[length], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

function find(parent) {
  if (set[parent] === parent) return parent;
  return (set[parent] = find(set[parent]));
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

// 시작
let answer = 0;
const set = Array.from({ length }, (v, i) => i);
const arr = [];

input.forEach((v, i) => {
  v[3] = i;
});

input.sort((a, b) => a[0] - b[0]);
for (let i = 0; i < input.length - 1; i++) {
  arr.push([
    input[i][3],
    input[i + 1][3],
    Math.abs(input[i][0] - input[i + 1][0]),
  ]);
}

input.sort((a, b) => a[1] - b[1]);
for (let i = 0; i < input.length - 1; i++) {
  arr.push([
    input[i][3],
    input[i + 1][3],
    Math.abs(input[i][1] - input[i + 1][1]),
  ]);
}

input.sort((a, b) => a[2] - b[2]);
for (let i = 0; i < input.length - 1; i++) {
  arr.push([
    input[i][3],
    input[i + 1][3],
    Math.abs(input[i][2] - input[i + 1][2]),
  ]);
}

arr.sort((a, b) => a[2] - b[2]);

for (let i = 0; i < arr.length; i++) {
  const [edge1, edge2, cost] = arr[i];
  if (!checkCycle(edge1, edge2)) {
    union(edge1, edge2);

    answer += cost;
  }
}

console.log(answer);
