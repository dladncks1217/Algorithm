// https://www.acmicpc.net/problem/2252
let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

input = input.map((v) => {
  v = v.split(" ");
  v = v.map((v) => parseInt(v));
  return v;
});

let length = input[0][0];
input.shift();

const graph = Array.from({ length: length + 1 }, () => []);
const check = Array.from({ length: length + 1 }, () => 0);

for (let [a, b] of input) {
  graph[a].push(b);
  check[b] += 1;
}

const stack = [];
for (let i = 1; i <= length; i++) {
  if (!check[i]) {
    stack.push(i);
  }
}

const answer = [];

while (stack.length) {
  let next = stack.pop();
  answer.push(next);
  graph[next].forEach((v) => {
    check[v] -= 1;
    if (!check[v]) stack.push(v);
  });
}

// console.log(graph);
// console.log(check);
console.log(answer.join(" "));
