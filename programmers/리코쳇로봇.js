function solution(board) {
  const states = {
    start: [0, 0],
    end: [0, 0],
  };

  board = board.map((items) => items.split("").map((item) => item));

  const dx = [1, 0, -1, 0];
  const dy = [0, -1, 0, 1];
  const [LEFT, DOWN, RIGHT, UP] = [0, 1, 2, 3];

  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[0].length; x++) {
      if (board[y][x] === ".") board[y][x] = Infinity;
      if (board[y][x] === "R") {
        board[y][x] = 0;
        states.start = [x, y];
      }
      if (board[y][x] === "G") {
        board[y][x] = Infinity;
        states.end = [x, y];
      }
    }
  }

  const queue = [
    [...states.start, LEFT, 1],
    [...states.start, DOWN, 1],
    [...states.start, RIGHT, 1],
    [...states.start, UP, 1],
  ];

  while (queue.length) {
    const [nowX, nowY, direction, count] = queue.shift();

    let nx = nowX;
    let ny = nowY;

    while (true) {
      nx += dx[direction];
      ny += dy[direction];
      if (
        nx < 0 ||
        ny < 0 ||
        nx >= board[0].length ||
        ny >= board.length ||
        board[ny][nx] === "D"
      ) {
        nx -= dx[direction];
        ny -= dy[direction];
        if (board[ny][nx] > count) {
          board[ny][nx] = count;
          for (let i = 0; i < 4; i++) {
            queue.push([nx, ny, i, count + 1]);
          }
        }
        break;
      }
    }
  }

  if (board[states.end[1]][states.end[0]] === Infinity) return -1;
  return board[states.end[1]][states.end[0]];
}

console.log(solution([".D.R", "....", ".G..", "...D"]));
