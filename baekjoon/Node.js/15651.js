const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const visited = Array.from({ length: input[0] + 1 }, () => 0);
const answer = [];
const temp = [];

function DFS(L) {
  if (L === input[1]) {
    answer.push(temp.join(" "));
  } else {
    for (let i = 1; i <= input[0]; i++) {
      temp.push(i);
      visited[i] = 1;
      DFS(L + 1);
      temp.pop();
      visited[i] = 0;
    }
  }
}

DFS(0);

console.log(answer.join("\n"));
