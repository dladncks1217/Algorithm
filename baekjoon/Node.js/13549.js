const [subin, sister] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

let answer = 0;
let queue = [[subin, 0]];

let visited = Array(100001).fill(false);

while (queue.length) {
  let [state, level] = queue.shift();

  if (visited[state]) continue;
  if (state === sister) {
    answer = level;
    break;
  }
  visited[state] = true;
  if (state + 1 <= 100000) queue.push([state + 1, level + 1]);
  if (state - 1 >= 0) queue.push([state - 1, level + 1]);
  if (state * 2 <= 100000) queue.unshift([state * 2, level]);
}

console.log(answer);
