/**
 * @param {character[][]} grid
 * @return {number}
 */
let numIslands = function (grid) {
  let answer = 0;

  let dx = [1, 0, -1, 0];
  let dy = [0, -1, 0, 1];

  function DFS(x, y) {
    grid[y][x] = "0";
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < grid[0].length &&
        ny < grid.length &&
        grid[ny][nx] === "1"
      ) {
        DFS(nx, ny);
      }
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let k = 0; k < grid[0].length; k++) {
      if (grid[i][k] === "1") {
        answer++;
        DFS(k, i);
      }
    }
  }

  return answer;
};

console.log(
  numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"],
  ])
);
