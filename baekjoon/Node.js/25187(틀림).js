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

// 고인물
for (let i = 0; i < waters.length; i++) {
  if (waters[i] === 0) old[i + 1] = 1;
}

// 청정수
for (let i = 0; i < waters.length; i++) {
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
  // console.log(waters, a - 1, b - 1, waters[a - 1], waters[b - 1]);
  const result =
    parentA < parentB ? (set[parentB] = parentA) : (set[parentA] = parentB);

  const reverseResult = parentA < parentB ? parentB : parentA;

  // console.log(result, reverseResult);
  if (waters[a] === 0) old[reverseResult]++;
  else fresh[result]++;
  if (waters[b] === 0) old[reverseResult]++;
  else fresh[result]++;

  const data = fresh[result];
  fresh[result] -= old[reverseResult];
  old[reverseResult] -= data;
}

for (let i = 0; i < M; i++) {
  const [tank1, tank2] = unionList[i];
  union(tank1, tank2);
  // console.log(fresh, old);
}

for (let i = 0; i < Q; i++) {
  const check = visitList[i];
  if (fresh[set[check]] - old[set[check]] > 0) console.log(1);
  else console.log(0);
}

// console.log(set);
// console.log(fresh, old);
