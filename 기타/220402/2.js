function solution(grid) {
  let answer = 0;
  grid = grid.map((v) => {
    v = v.split("");
    return v;
  });

  let check = ["a", "b", "c"];
  let dy = [0, -1, 0, 1];
  let dx = [1, 0, -1, 0];

  function DFS(grid, L, x, y, alph) {
    // console.log(grid);
    if (L > 3) {
      for (let i = 0; i < grid.length; i++) {
        for (let k = 0; k < grid[i].length; k++) {
          if (grid[i][k] !== 0) return;
        }
      }
      return answer++;
    } else {
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (nx > 0 && ny > 0 && nx < grid.length && ny < grid.length) {
          if (alph === grid[ny][nx]) {
            grid[y][x] = 0;
            grid[ny][nx] = 0;
            DFS(grid, L, nx, ny, alph);
          } else {
            newalph = grid[ny][nx];
            grid[y][x] = 0;
            grid[ny][nx] = 0;
            DFS(grid, L + 1, nx, ny, newalph);
          }
        }
      }
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let k = 0; k < grid[0].length; k++) {
      for (let j = 0; j < 3; j++) {
        if (grid[i][k] === "?") {
          grid[i][k] = check[j];
        }
      }
    }

    DFS(grid, 0, 0, 0, grid[0][0]);
  }

  return answer;
}

console.log(solution(["??b", "abc", "cc?"]));
