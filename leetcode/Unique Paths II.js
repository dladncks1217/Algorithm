/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
let uniquePathsWithObstacles = function (obstacleGrid) {
  let col = obstacleGrid.length;
  let row = obstacleGrid[0].length;
  if (
    obstacleGrid[0][0] === 1 ||
    obstacleGrid[col - 1][row - 1] === 1 ||
    obstacleGrid.length === 0
  )
    return 0;
  for (let i = 0; i < obstacleGrid[0].length; i++) {
    for (let k = 0; k < obstacleGrid.length; k++) {
      if (obstacleGrid[k][i] === 1) obstacleGrid[k][i] = 0;
      if (i === 0 || k === 0) obstacleGrid[k][i] = 1;
      else {
        let up = 0;
        let left = 0;
        if (i > 0) {
          up = obstacleGrid[i - 1][k];
        }
        if (k > 0) {
          left = obstacleGrid[i][k - 1];
        }
        obstacleGrid[k][i] = up + left;
      }
    }
  }
  console.log(obstacleGrid);
};

console.log(
  uniquePathsWithObstacles([
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ])
);
