const [subin, sister] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

let answer = 0;
let queue = [[subin, 0]];

let visited = Array(100001).fill(false);
let head = 0;
let tail = 0;
while (head <= tail) {
  let [state, level] = queue[head];
  head++;
  if (visited[state]) continue;
  if (state === sister) {
    answer = level;
    break;
  }
  visited[state] = true;
  if (state + 1 <= 100000) queue.push([state + 1, level + 1]);
  if (state - 1 >= 0) queue.push([state - 1, level + 1]);
  if (state * 2 <= 100000) queue.push([state * 2, level + 1]);

  tail = queue.length - 1;
}

console.log(answer);
