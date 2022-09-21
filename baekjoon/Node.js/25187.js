const [[N, M, Q], waters, ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

const old = Array.from({ length: N + 1 }, () => 0);
const fresh = Array.from({ length: N + 1 }, () => 0);

// 고인물 청정수 구분
for (let i = 0; i < waters.length; i++) {
  if (waters[i] === 0) old[i + 1] = 1;
  if (waters[i] === 1) fresh[i + 1] = 1;
}

// union-find할 set
const set = Array.from({ length: N + 1 }, (v, i) => i);
waters.unshift(0);

// 유니온연산할 리스트들
const unionList = [];
for (let i = 0; i < M; i++) {
  unionList.push(input[i].slice());
}

// 방문할 리스트들
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

  if (parentA === parentB) return;
  if (parentA < parentB) {
    fresh[parentA] += fresh[parentB];
    old[parentA] += old[parentB];
    set[parentB] = parentA;
  } else {
    fresh[parentB] += fresh[parentA];
    old[parentB] += old[parentA];
    set[parentA] = parentB;
  }
}

for (let i = 0; i < M; i++) {
  const [tank1, tank2] = unionList[i];
  union(tank1, tank2);
}

const result = [];
for (let i = 0; i < Q; i++) {
  let check = find(visitList[i]); // 방문한곳
  if (fresh[check] > old[check]) result.push(1);
  else result.push(0);
}

console.log(result.join("\n"));
