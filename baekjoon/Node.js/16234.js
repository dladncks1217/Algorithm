const [[N, L, R], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

let answer = 0;
let isFinished = true;

const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];

function BFS(startX, startY, check) {
  const result = [];
  const queue = [[startX, startY]];
  let sum = 0;

  while (queue.length) {
    const [x, y] = queue.shift();
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (nx >= 0 && ny >= 0 && nx < N && ny < N && check[ny][nx] === false) {
        const gap = Math.abs(input[ny][nx] - input[y][x]);
        if (gap >= L && gap <= R) {
          check[ny][nx] = true;
          result.push([nx, ny]);
          queue.push([nx, ny]);
          sum += input[ny][nx];
        }
      }
    }
  }

  return [result, sum];
}

while (isFinished) {
  isFinished = false;
  let check = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => false)
  );

  for (let y = 0; y < N; y++) {
    for (let x = 0; x < N; x++) {
      if (!check[y][x]) {
        const result = BFS(x, y, check);
        check[y][x] = true;
        if (result[0].length >= 1) {
          isFinished = true;

          const [changes, sumSplit] = [
            result[0],
            parseInt(result[1] / result[0].length),
          ];
          changes.forEach((v) => {
            const [x, y] = v;
            input[y][x] = sumSplit;
          });
        }
      }
    }
  }
  answer += 1;
}

console.log(answer - 1);
