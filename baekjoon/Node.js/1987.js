const [[size], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split("");
    return v;
  });

function solution(graph) {
  let answer = 0;

  let set = new Set();
  const dx = [1, 0, -1, 0];
  const dy = [0, -1, 0, 1];

  set.add(graph[0][0]);
  function DFS(x, y, cnt) {
    for (let i = 0; i < 4; i++) {
      let [nx, ny] = [dx[i] + x, dy[i] + y];
      if (nx >= 0 && ny >= 0 && nx < graph[0].length && ny < graph.length) {
        if (!set.has(graph[ny][nx])) {
          set.add(graph[ny][nx]);
          answer = Math.max(answer, cnt + 1);
          DFS(nx, ny, cnt + 1);
          set.delete(graph[ny][nx]);
        }
      }
    }
  }

  DFS(0, 0, 1);
  if (answer === 0) return 1;
  return answer;
}

console.log(solution(input));
