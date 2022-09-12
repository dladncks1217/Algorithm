const [[resultNum], [length], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

const graph = Array.from({ length: resultNum + 1 }, () => []);
const check = Array.from({ length: resultNum + 1 }, () => 0);
const needPart = Array.from({ length: resultNum + 1 }, () => 0);
const isResultPart = Array.from({ length: resultNum + 1 }, () => true);

input.forEach((v) => {
  const [part, needpart, count] = v;

  graph[part].push([needpart, count]);
  check[needpart]++;
  isResultPart[part] = false;
});

const queue = [];

for (let i = 1; i < check.length; i++) {
  if (!check[i]) {
    queue.push(i);
    needPart[i] = 1;
  }
}

while (queue.length) {
  const now = queue.shift();

  graph[now].forEach((v) => {
    const [next, count] = v;
    check[next]--;

    needPart[next] += count * needPart[now];
    if (!check[next]) queue.push(next);
  });
}

const result = [];
for (let i = 1; i < isResultPart.length; i++) {
  if (isResultPart[i]) {
    result.push(`${i} ${needPart[i]}`);
  }
}

console.log(result.join("\n"));
