function solution(h, w, n, board) {
  let answer = 0;
  board = board.map((v) => {
    return (v = v.split(""));
  });

  function DFS(type, x, y, count) {
    if (count > n) return answer--;
    if (count === n) return answer++;

    if (type === "가로") {
      let nx = x + 1;
      let ny = y;
      if (nx > 0 && ny > 0 && nx < w && ny < h) {
        if (board1[ny][nx] === "1") {
          board1[ny][nx] = "0";
          DFS(type, nx, ny, count + 1);
        } else return;
      }
    }
    if (type === "세로") {
      let nx = x;
      let ny = y - 1;
      if (nx > 0 && ny > 0 && nx < w && ny < h) {
        if (board2[ny][nx] === "1") {
          board2[ny][nx] = "0";
          DFS(type, nx, ny, count + 1);
        }
      }
    }
    // 오른쪽으로가는대각
    if (type === "오른대각") {
      let nx = x + 1;
      let ny = y + -1;
      if (nx > 0 && ny > 0 && nx < w && ny < h) {
        if (board3[ny][nx] === "1") {
          board3[ny][nx] = "0";
          DFS(type, nx, ny, count + 1);
        }
      }
    }
    // 왼쪽으로가는대각
    if (type === "왼대각") {
      let nx = x - 1;
      let ny = y + -1;
      if (nx > 0 && ny > 0 && nx < w && ny < h) {
        if (board4[ny][nx] === "1") {
          board4[ny][nx] = "0";
          DFS(type, nx, ny, count + 1);
        }
      }
    }
  }

  let board1 = board.slice();
  // 가로
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board1[i][j] === "1") {
        DFS("가로", j, i, 0);
      }
    }
  }
  let board2 = board.slice();
  // 세로
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board2[i][j] === 1) {
        DFS("세로", j, i, 0);
      }
    }
  }
  let board3 = board.slice();
  // 오른쪽 대각선
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board3[i][j] === "1") {
        DFS("오른대각", j, i, 0);
      }
    }
  }
  let board4 = board.slice();
  // 왼쪽 대각선
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board4[i][j] === "1") {
        DFS("왼대각", j, i, 0);
      }
    }
  }
  return answer;
}

console.log(
  solution(7, 9, 4, [
    "111100000",
    "000010011",
    "111100011",
    "111110011",
    "111100011",
    "111100010",
    "111100000",
  ])
);
