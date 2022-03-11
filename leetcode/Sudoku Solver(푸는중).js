/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
let solveSudoku = function (board) {
  let check = Array.from({ length: 9 }, () => 0); // 확인용 배열
  check[0] = 1;
  function DFS(L, y) {
    if (L === 9) {
      let sum = 0;
      for (let i = 0; i < 9; i++) {
        for (k = 0; k < 9; k++) {
          sum += board[k][i];
        }
      }
      if (sum === 45) {
        console.log(board);
      }
    } else {
      for (let i = 0; i < 9; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          board[y][i] = i + 1;
          DFS(L + 1, y);
          board[y][i] = ".";
          check[i] = 0;
        } else DFS(L + 1, y);
      }
    }
  }
  for (let i = 0; i < 9; i++) {
    board[i].forEach((v, k) => {
      if (v !== ".") {
        check[k] = 1;
      } else check[k] = 0;
    });
    DFS(0, i);
  }
};

console.log(
  solveSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
