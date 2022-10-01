const [[N, M, K], cost, ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

let answer = 0;
cost.unshift(0);
const costCheck = [];

const set = Array.from({ length: N + 1 }, (v, i) => i);
const check = Array.from({ length: N + 1 }, () => false);

function find(parent) {
  if (set[parent] === parent) return parent;
  return (set[parent] = find(set[parent]));
}

function union(a, b) {
  const parentA = find(a);
  const parentB = find(b);

  if (cost[parentA] > cost[parentB]) {
    set[parentA] = parentB;
    check[parentA] = true;

    if (!check[parentB]) {
      //   answer += cost[parentB];
      check[parentB] = true;
    }
    // find(set[parentA]);
  } else {
    set[parentB] = parentA;
    check[parentB] = true;

    if (!check[parentA]) {
      //   answer += cost[parentA];
      check[parentA] = true;
    }
    // find(set[parentB]);
  }
}

input.forEach((v) => {
  const [a, b] = v;
  union(a, b);
});

for (let i = 1; i < set.length; i++) {
  find(i);
  if (costCheck.indexOf(set[i]) === -1) {
    answer += cost[set[i]];
    costCheck.push(set[i]);
  }
}
// console.log(set);
// console.log(answer);
answer <= K ? console.log(answer) : console.log("Oh no");
