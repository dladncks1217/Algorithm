const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const [H, W] = input.shift().split(" ").map(Number);
const graph = input.map((v) => {
  v = v.split("");
  return v;
});

const answer = [0, 0];
let [sheep, wolf] = [0, 0];
const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];

function DFS(x, y) {
  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];
    if (nx >= 0 && ny >= 0 && nx < W && ny < H && graph[ny][nx] !== "#") {
      if (graph[ny][nx] === "o") sheep += 1;
      if (graph[ny][nx] === "v") wolf += 1;
      graph[ny][nx] = "#";
      DFS(nx, ny);
    }
  }
}

for (let i = 0; i < H; i++) {
  for (let k = 0; k < W; k++) {
    const state = graph[i][k];
    if (state !== "#") {
      sheep = 0;
      wolf = 0;
      if (state === "o") sheep += 1;
      if (state === "v") wolf += 1;
      graph[i][k] = "#";
      DFS(k, i);
      sheep > wolf ? (answer[0] += sheep) : (answer[1] += wolf);
    }
  }
}

console.log(answer.join(" "));
