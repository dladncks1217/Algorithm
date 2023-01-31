// const [[N, M], [h1, h2], ...input] = require("fs")
//   .readFileSync("./dev/stdin")
//   .toString()
//   .trim()
//   .split("\n")
//   .map((v) => {
//     v = v.split(" ").map(Number);
//     return v;
//   });

const fs = require("fs");
let input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const [N, M] = input.shift().split(" ");
const [h1, h2] = input.shift().split(" ");

input = input.map((v) => {
  v = v.split(" ").map(Number);
  return v;
});

input.sort((a, b) => b[2] - a[2]);
let answer = Infinity;
const set = Array.from({ length: N + 1 }, (v, i) => i);

function find(a) {
  if (set[a] === a) return a;
  return (set[a] = find(set[a]));
}

function union(a, b) {
  const parentA = find(a);
  const parentB = find(b);

  parentA < parentB ? (set[parentB] = parentA) : (set[parentA] = parentB);
}

function cycleCheck(a, b) {
  const parentA = find(a);
  const parentB = find(b);

  return parentA === parentB ? true : false;
}

function isFinished(a, b) {
  if (find(a) === find(b)) return true;
  return false;
}

for (let [a, b, cost] of input) {
  if (!cycleCheck(a, b)) {
    union(a, b);
    if (isFinished(h1, h2)) {
      answer = Math.min(answer, cost);
      break;
    }
  }
}

answer === Infinity ? console.log(0) : console.log(answer);
