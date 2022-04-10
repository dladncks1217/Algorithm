// https://leetcode.com/problems/minimum-path-sum/
/**
 * @param {number[][]} grid
 * @return {number}
 */
let minPathSum = function (grid) {
  let answer = 0;

  // 세로
  for (let i = 0; i < grid.length; i++) {
    if (i !== 0) {
      grid[i][0] += grid[i - 1][0];
    }
  }

  // 가로
  for (let i = 0; i < grid[0].length; i++) {
    if (i !== 0) {
      grid[0][i] += grid[0][i - 1];
    }
  }
  for (let i = 0; i < grid.length; i++) {
    for (let k = 0; k < grid[0].length; k++) {
      if (i !== 0 && k !== 0) {
        let check = grid[i][k];
        grid[i][k] = Math.min(check + grid[i - 1][k], check + grid[i][k - 1]);
      }
    }
  }

  return grid[grid.length - 1][grid[0].length - 1];
};

console.log(
  minPathSum([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
  ])
);

// 시간초과
