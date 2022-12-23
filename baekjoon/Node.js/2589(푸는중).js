const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [H, W] = input.shift().split(" ").map(Number);
const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];

const map = input.map((v) => {
  v = v.split("");
  return v;
});

let answer = 0;
const temp = [];
const cases = [];
let isTrue = false;

function BFS(x, y) {
  const graph = map.map((v) => v.slice());
  const queue = [[x, y, 0, true]];
  graph[y][x] = "L";
  let isFinished = false;
  let dist = 0;

  while (queue.length && !isFinished) {
    const [startX, startY, count, isSameLand] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [dx[i] + startX, dy[i] + startY];
      if (nx >= 0 && ny >= 0 && nx < W && ny < H) {
        if (graph[ny][nx] === "O" && isSameLand === true) {
          dist = count + 1;
          isFinished = true;
          break;
        }
        if (graph[ny][nx] === "W") queue.push([nx, ny, count + 1, false]);
        queue.push([nx, ny, count + 1, true]);
      }
    }
  }
  return dist === 0 ? -1 : dist - 1;
}

function getLocation(count) {
  if (count === 2) {
    const landCheck = map.map((v) => v.slice());
    landCheck[temp[0][1]][temp[0][0]] = "L";

    answer = Math.max(answer, BFS(temp[0][0], temp[0][1]));
  } else {
    for (let i = 0; i < H; i++) {
      for (let k = 0; k < W; k++) {
        if (map[i][k] === "L") {
          map[i][k] = "O";
          temp.push([k, i]);
          getLocation(count + 1);
          map[i][k] = "L";
          temp.pop();
        }
      }
    }
  }
}
getLocation(0);

console.log(answer);
