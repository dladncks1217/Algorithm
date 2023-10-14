const [[N, M], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

let answer = 0;

function searchSideWaters(x, y) {
  let waterCount = 0;
  const dx = [1, 0, -1, 0];
  const dy = [0, -1, -0, 1];

  for (let i = 0; i < 4; i++) {
    const nx = dx[i] + x;
    const ny = dy[i] + y;
    if (nx >= 0 && ny >= 0 && nx < M && ny < N)
      if (input[ny][nx] === 0) waterCount++;
  }

  if (input[y][x] - waterCount <= 0) return;
  return input[y][x] - waterCount;
}

const queue = [[0, 0]];
