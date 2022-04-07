// https://leetcode.com/problems/minimum-path-sum/
/**
 * @param {number[][]} grid
 * @return {number}
 */
let minPathSum = function (grid) {
  let answer = 0;

  // 거리확인용
  let dyn = Array.from(Array(grid.length), () =>
    Array(grid[0].length).fill(100)
  );

  // 이미간길 또 안가게
  let dist = Array.from(Array(grid.length), () =>
    Array(grid[0].length).fill(0)
  );

  let dy = [0, -1, 0, 1];
  let dx = [1, 0, -1, 0];

  dyn[0][0] = grid[0][0];

  function DFS(sum, x, y) {
    if (x === grid[0].length - 1 && y === grid.length - 1) {
      //   console.log(dyn[y][x]);
      return dyn[y][x];
    } else {
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < dyn[0].length &&
          ny < dyn.length &&
          dist[ny][nx] === 0
        ) {
          dist[ny][nx] = 1;
          dyn[ny][nx] = Math.min(dyn[ny][nx], sum + grid[ny][nx]);
          DFS(sum + grid[ny][nx], nx, ny);
          dist[ny][nx] = 0;
        }
      }
    }
  }

  answer = DFS(grid[0][0], 0, 0);

  return dyn[grid.length - 1][grid[0].length - 1];
};

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);

// 시간초과
