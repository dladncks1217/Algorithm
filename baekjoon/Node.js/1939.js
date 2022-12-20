// 노드 input 억까문제임
const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const [N, M] = input.shift().split(" ");
const [start, end] = input.pop().split(" ");

input = input.map((v) => {
  v = v.split(" ").map(Number);
  return v;
});
let answer = 0;
const graph = [];
const set = Array.from({ length: N + 1 }, (v, i) => i);

for (const [v1, v2, cost] of input) {
  graph.push([v1, v2, cost]);
}

graph.sort((a, b) => b[2] - a[2]);

function find(a) {
  if (set[a] === a) return a;
  return (set[a] = find(set[a]));
}

function union(a, b) {
  const parentA = find(a);
  const parentB = find(b);

  parentA < parentB ? (set[parentB] = parentA) : (set[parentA] = parentB);
}

function isCycled(a, b) {
  const parentA = find(a);
  const parentB = find(b);

  if (parentA === parentB) return true;
  return false;
}

function isFinished(a, b) {
  if (find(a) === find(b)) return true;
  return false;
}

for (let i = 0; i < set.length; i++) {
  const [v1, v2, cost] = graph[i];
  if (!isCycled(v1, v2)) {
    union(v1, v2);
    if (isFinished(start, end)) {
      answer = cost;
      break;
    }
  }
}

console.log(answer);
