const [[length], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

const start = Array.from({ length: length + 1 }, () => 0);
const dy = Array.from({ length: length + 1 }, () => 0);
const graph = Array.from({ length: length + 1 }, () => []);
const check = Array.from({ length: length + 1 }, () => 0);

for (let i = 0; i < length; i++) {
  start[i + 1] = input[i][0];
  dy[i + 1] = input[i][0];
  for (let k = 1; k < input[i].length - 1; k++) {
    graph[input[i][k]].push(i + 1);
    check[i + 1]++;
  }
}

const queue = [];
for (let i = 1; i < check.length; i++) if (!check[i]) queue.push(i);

while (queue.length) {
  const now = queue.shift();
  graph[now].forEach((next) => {
    dy[next] = Math.max(dy[next], dy[now] + start[next]);
    check[next]--;
    if (!check[next]) queue.push(next);
  });
}
dy.shift();
console.log(dy.join("\n"));
