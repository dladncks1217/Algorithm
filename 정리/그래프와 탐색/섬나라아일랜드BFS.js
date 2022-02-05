function solution(board) {
  let answer = 0;
  let dx = [-1, 0, 1, 1, 1, 0, -1, -1];
  let dy = [1, 1, 1, 0, -1, -1, -1, 0];
  let queue = [];

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 1) {
        board[i][j] === 0;
        queue.push([i, j]);
        while (queue.length) {
          let [x, y] = queue.shift();

          for (let k = 0; k < 8; k++) {
            let nx = x + dx[k];
            let ny = y + dy[k];
            // console.log(ny, nx);
            if (
              nx >= 0 &&
              ny >= 0 &&
              nx < board[0].length &&
              ny < board.length &&
              board[ny][nx] === 1
            ) {
              //   console.log(queue);
              board[ny][nx] = 0;
              queue.push([nx, ny]);
            }
          }
        }
        answer++;
      }
    }
  }
  return answer;
}

let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];

console.log(solution(arr));
