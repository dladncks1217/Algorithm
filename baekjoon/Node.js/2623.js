const [[singers, length], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

const graph = Array.from({ length: singers + 1 }, () => []);
const check = Array.from({ length: singers + 1 }, () => 0);

for (let i = 0; i < input.length; i++) {
  for (let k = 1; k < input[i].length - 1; k++) {
    graph[input[i][k]].push(input[i][k + 1]);
    check[input[i][k + 1]]++;
  }
}

const queue = [];
check.forEach((v, i) => {
  if (v === 0 && i > 0) queue.push(i);
});

const answer = [];
while (queue.length) {
  const now = queue.shift();
  answer.push(now);
  graph[now].forEach((next) => {
    check[next]--;
    if (!check[next]) queue.push(next);
  });
}

answer.length < singers ? console.log(0) : console.log(answer.join("\n"));
