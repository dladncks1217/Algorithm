const [[N, M], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

let answer = 0;

const set = Array.from({ length: N }, (v, i) => i);

function find(parent) {
  if (set[parent] === parent) return parent;
  return (set[parent] = find(set[parent]));
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
  else return false;
}

let temp = 0;

for (let i = 0; i < input.length; i++) {
  const [vertices1, vertices2] = input[i];
  if (answer === 0) {
    temp++;
    if (isCycle(vertices1, vertices2)) {
      answer = temp;
    }
    union(vertices1, vertices2);
  } else {
    break;
  }
}

console.log(answer);
