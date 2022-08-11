const [subin, sister] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((v) => +v);

let answer = [0, 0];
let queue = [[subin, 0]];

let visited = Array(100001).fill(0);
let foundLevel = false;

while (queue.length) {
  let [state, level] = queue.shift();
  if (foundLevel && level > answer[0]) {
    break;
  }

  if (state === sister) {
    foundLevel = true;
    answer[0] = level;
    answer[1] += 1;
    // break;
  }

  if (!foundLevel) {
    visited[state] = level + 1;

    if (state + 1 <= 100000 && visited[state + 1] === 0)
      queue.push([state + 1, level + 1]);
    if (state - 1 >= 0 && visited[state - 1] === 0)
      queue.push([state - 1, level + 1]);
    if (state * 2 <= 100000 && state * 2 !== 0 && visited[state * 2] === 0)
      queue.push([state * 2, level + 1]);
  }
}

console.log(answer.join("\n"));
