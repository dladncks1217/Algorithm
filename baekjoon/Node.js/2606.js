let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

let answer = 0;
let length = Number(input.shift());
let graph = Array.from({ length: length + 1 }, () => []);
input.shift();
input = input.map((v) => {
  v = v.split(" ");
  v[0] = +v[0];
  v[1] = +v[1];
  return v;
});

const queue = [];
const check = Array.from({ length: length + 1 }, () => 0);

for ([a, b] of input) {
  graph[a].push(b);
  graph[b].push(a);
}

queue.push(1);
check[1] = 1;

while (queue.length) {
  let N = queue.shift();
  for (nextComp of graph[N]) {
    if (check[nextComp] === 0) {
      queue.push(nextComp);
      check[nextComp] = 1;
      answer++;
    }
  }
}

console.log(answer);
