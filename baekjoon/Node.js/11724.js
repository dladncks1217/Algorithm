const [input, ...inputs] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map((v) => +v);
    return v;
  });

let answer = 0;
const check = Array.from({ length: input[0] + 1 }, () => 0);
const graph = Array.from({ length: input[0] + 1 }, () => []);
let queue = [];
for ([a, b] of inputs) {
  graph[a].push(b);
  graph[b].push(a);
}

for (let i = 1; i <= check.length; i++) {
  if (check[i] === 0) {
    answer++;
    check[i] = 1;
    queue.push(...graph[i]);
    let head = 0;
    let tail = 0;
    while (head <= tail) {
      let L = queue[head];
      head++;
      if (check[L] === 0) {
        check[L] = 1;
        queue.push(...graph[L]);
        tail = queue.length - 1;
      }
    }
    queue = [];
  }
}

console.log(answer);
