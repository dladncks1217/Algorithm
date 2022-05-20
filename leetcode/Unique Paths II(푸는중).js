/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
let uniquePathsWithObstacles = function (obstacleGrid) {
  obstacleGrid = obstacleGrid.map((v) => {
    return (v = v.map((v) => {
      if (v === 1) return "X";
      else return v;
    }));
  });

  obstacleGrid[0][0] = 1;

  for (let i = 0; i < obstacleGrid.length; i++) {
    let hasX = false;
    for (let k = 0; k < obstacleGrid[0].length; k++) {
      if (i == 0 || k == 0) {
        if (obstacleGrid[i][k] !== "X" && hasX !== true) {
          obstacleGrid[i][k] = 1;
        } else {
          hasX = true;
        }
      } else {
        if (obstacleGrid[i][k] !== "X") {
          if (obstacleGrid[i - 1][k] !== "X") {
            obstacleGrid[i][k] = obstacleGrid[i - 1][k] + 1;
          } else if (obstacleGrid[i][k - 1] !== "X") {
            obstacleGrid[i][k] = obstacleGrid[i][k - 1] + 1;
          } else {
            obstacleGrid[i][k] =
              obstacleGrid[i - 1][k] + obstacleGrid[i][k - 1];
          }
        }
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
