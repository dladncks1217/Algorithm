// https://leetcode.com/problems/max-area-of-island/
/**
 * @param {number[][]} grid
 * @return {number}
 */
let maxAreaOfIsland = function (grid) {
  let answer = 0;
  let check = 0;
  let dy = [0, -1, 0, 1];
  let dx = [1, 0, -1, 0];

  function DFS(x, y, L) {
    check++;
    grid[y][x] = 0;
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < grid[0].length &&
        ny < grid.length &&
        grid[ny][nx] === 1
      ) {
        DFS(nx, ny, L + 1);
      }
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let k = 0; k < grid[0].length; k++) {
      if (grid[i][k] === 1) {
        check = 0;
        DFS(k, i, 1);
        answer = Math.max(answer, check);
      }
    }
  }

  return answer;
};

console.log(
  maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
  ])
);
