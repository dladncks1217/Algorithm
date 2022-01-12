function solution(board) {
  let answer = 0;
  let dx = [1, 0, -1, 0];
  let dy = [0, 1, 0, -1];
  function DFS(x, y) {
    if (x === 6 && y === 6) {
      answer++;
    } else {
      for (let i = 0; i < 4; i++) {
        let newX = x + dx[i];
        let newY = y + dy[i];
        if (
          newX < 7 &&
          newY < 7 &&
          newX >= 0 &&
          newY >= 0 &&
          board[newX][newY] === 0
        ) {
          board[newX][newY] = 1;
          DFS(newX, newY);
          board[newX][newY] = 0;
        }
      }
    }
  }
  board[0][0] = 1;
  DFS(0, 0);

  return answer;
}

let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr));
