const [[N, M], knows, ...input] = require("fs")
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
const isKnow = Array.from({ length: N + 1 }, () => 0);

// 진실을 아는 사람은 0으로.
for (let i = 1; i < knows.length; i++) {
  //   set[i] = 0;
  isKnow[knows[i]] = 1;
}

function find(parent) {
  if (set[parent] === parent) return parent;
  return (set[parent] = find(set[parent]));
}

function union(a, b) {
  const parentA = find(a);
  const parentB = find(b);
  if (parentA == parentB) return;
  if (isKnow[parentA] === 1) {
    set[parentB] = parentA;
  } else {
    set[parentA] = parentB;
  }
}

input.forEach((v) => {
  for (let i = 2; i <= v[0]; i++) {
    union(v[1], v[i]);
  }
});
input.forEach((v) => {
  for (let i = 1; i <= v[0]; i++) {
    if (isKnow[find(v[i])] === 1) {
      break;
    } else if (i === v[0]) {
      answer++;
    }
  }
});

if (knows === 0) {
  console.log(M);
} else {
  console.log(answer);
}
