// https://leetcode.com/problems/word-search/
let exist = function (board, word) {
  word = word.split("");
  let wordlen = word.length;
  let dx = [0, 1, 0, -1];
  let dy = [1, 0, -1, 0];

  function DFS(L, x, y, board2) {
    if (L === wordlen) {
      return true;
    } else {
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (nx >= 0 && ny >= 0 && nx < board[0].length && ny < board.length) {
          if (board2[ny][nx] === word[L]) {
            board2[ny][nx] = null;

            if (DFS(L + 1, nx, ny, board2)) return true;
            board2[ny][nx] = word[L];
          }
        }
      }
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === word[0]) {
        board[i][j] = null;
        if (DFS(1, j, i, board)) return true;
        board[i][j] = word[0];
      }
    }
  }

  return false;
};

console.log(
  exist(
    [
      ["A", "B", "C", "E"],
      ["S", "F", "C", "S"],
      ["A", "D", "E", "E"],
    ],
    "ABCB"
  )
);
