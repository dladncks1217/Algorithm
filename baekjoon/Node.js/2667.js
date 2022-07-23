const [length, ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split("");
    return v;
  });

function solution(graph) {
  let [answer1, answer2] = [0, []];
  const [col, row] = [graph.length, graph[0].length];

  const dx = [1, 0, -1, 0];
  const dy = [0, -1, 0, 1];
  let count = 0;

  for (let i = 0; i < col; i++) {
    for (let k = 0; k < row; k++) {
      if (graph[i][k] === "1") {
        count = 0;
        DFS(k, i);
        if (count === 0) answer2.push(1);
        else answer2.push(count);
        answer1 += 1;
      }
    }
  }

  function DFS(x, y) {
    for (let i = 0; i < 4; i++) {
      let [nx, ny] = [dx[i] + x, dy[i] + y];
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < graph[0].length &&
        ny < graph.length &&
        graph[ny][nx] === "1"
      ) {
        count++;
        graph[ny][nx] = "0";
        DFS(nx, ny);
      }
    }
  }

  console.log(answer1);
  answer2.sort((a, b) => a - b);
  console.log(answer2.join("\n"));
}

solution(input);
