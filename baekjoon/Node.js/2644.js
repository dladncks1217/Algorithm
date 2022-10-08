const [[line], [one, two], [N], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });
let answer = 0;
// 젤 큰거
let biggest = 0;

for (const v of input) {
  const [x, y] = v;
  biggest = Math.max(biggest, x);
  biggest = Math.max(biggest, y);
}
const graph = Array.from({ length: biggest + 1 }, () => []);
const visited = Array.from({ length: biggest + 1 }, () => 0);

for (const v of input) {
  const [x, y] = v;
  graph[x].push(y);
  graph[y].push(x);
}

const queue = [];
let temp = [];
queue.push(one);
visited[one] = 1;
let isFinished = false;
let count = 1;

while (queue.length) {
  const curr = queue.shift();
  for (let i = 0; i < graph[curr].length; i++) {
    const check = graph[curr][i];
    if (visited[check] === 0) {
      visited[check] = 1;

      if (check === two) {
        answer = count;
        isFinished = true;
        break;
      }
      temp.push(check);
    }
  }
  if (!queue.length) {
    queue.push(...temp);
    count++;
    temp = [];
  }
  if (isFinished) break;
}

answer === 0 ? console.log(-1) : console.log(answer);
