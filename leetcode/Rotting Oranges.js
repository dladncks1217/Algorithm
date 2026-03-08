/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  let answer = 0;
  const queue = [];
  const startOranges = findRottenedOranges(grid);

  queue.push(...startOranges);

  while (queue.length) {
    const [y, x, time] = queue.shift();
    answer = Math.max(answer, time);
    for (let i = 0; i < 4; i++) {
      const dx = [1, 0, -1, 0];
      const dy = [0, -1, 0, 1];
      const [nx, ny] = [x + dx[i], y + dy[i]];

      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < grid[0].length &&
        ny < grid.length &&
        grid[ny][nx] < grid[y][x] &&
        grid[ny][nx] === 1
      ) {
        queue.push([ny, nx, time + 1]);
        grid[ny][nx] = 2;
      }
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let k = 0; k < grid[0].length; k++) {
      if (grid[i][k] === 1) return -1;
    }
  }

  return answer;
};

const findRottenedOranges = function (grid) {
  const orangeList = [];

  for (let y = 0; y < grid.length; y++) {
    for (let x = 0; x < grid[y].length; x++) {
      if (grid[y][x] === 2) {
        orangeList.push([y, x, 0]);
      }
    }
  }

  return orangeList;
};
