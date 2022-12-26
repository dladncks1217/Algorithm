const [F, S, G, U, D] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let answer = 0;
const queue = [[S, 0]];
const visited = Array.from({ length: F + 1 }, () => false);

while (queue.length) {
  const [state, click] = queue.shift();

  if (state === G) {
    answer = click;
    break;
  }
  if (state + U <= F && !visited[state + U]) {
    visited[state + U] = true;
    queue.push([state + U, click + 1]);
  }
  if (state - D > 0 && !visited[state - D]) {
    visited[state - D] = true;
    queue.push([state - D, click + 1]);
  }
}
if (S === G) console.log(0);
else answer === 0 ? console.log("use the stairs") : console.log(answer);
