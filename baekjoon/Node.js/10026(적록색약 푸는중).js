let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");
const col = +input.shift();
const row = +input[0].length;

let check = Array(col).fill(Array.from({ length: row }, () => 0));
check[0][0] = 1;

input = input.map((v) => (v = v.split("")));
console.log(input);

function solution(picture) {
  let answer = [0, 0];

  const dx = [1, 0, -1, 0];
  const dy = [0, -1, 0, 1];

  function DFS(find, x, y, graph, check, colorBlind) {
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < row &&
        ny < col &&
        check[ny][nx] === 0 &&
        graph[ny][nx] === find
      ) {
      }
    }
  }

  return console.log(answer);
}

solution(input);
