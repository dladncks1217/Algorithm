function solution(board) {
  let answer = 0;
  let dx = [1, 0, -1, 0]; // dfs탐색에 쓸 배열 (x)
  let dy = [0, -1, 0, 1]; // dfs탐색에 쓸 배열 (y)
  let maxCount = 0; // 시작점 찾기위해 사용할 변수
  let startPoint = [0, 0]; // 시작점

  let countCheck = []; // 제일 많이 지울법한 부분

  for (let i = 0; i < board[0].length; i++) {
    // 시작점 찾아내기 (세로)
    countCheck = [];
    for (let k = 0; k < board.length; k++) {
      if (countCheck.indexOf(board[k][i]) === -1) {
        countCheck.push(board[k][i]);
      }
    }
    if (countCheck.length > maxCount) {
      // 더 큰거 확인하면
      maxCount = countCheck.length; // 최대 수 대입
      startPoint = [[0, i]]; // 시작점 새롭게
    } else if (countCheck.length === maxCount) {
      startPoint.push([0, i]); // 시작점 가능성있는것들 추가
    }
  }

  for (let i = 0; i < board.length; i++) {
    // 시작점 찾아내기 (가로)
    countCheck = [];
    for (let k = 0; k < board[0].length; k++) {
      if (countCheck.indexOf(board[i][k]) === -1) {
        countCheck.push(board[i][k]);
      }
    }
    if (countCheck.length > maxCount) {
      // 더 큰거 확인하면
      maxCount = countCheck.length; // 최대 수 대입
      startPoint = [[i, 0]]; // 시작점 새롭게
    } else if (countCheck.length === maxCount) {
      startPoint.push([i, 0]); // 시작점 가능성있는것들 추가
    }
  }

  console.log(startPoint);

  function DFS(x, y, board, zerocnt, down, end) {
    if (end[0] > y && end[1] > x) {
      return zerocnt;
    }
    let current = board[y][x]; // 현재 알파벳
    board[y][x] = 0; // 다시 못오게
    zerocnt++; // 없앤 칸 추가
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx >= 0 && ny >= 0 && nx < board[0].length && ny < board.length) {
        if (board[ny][nx] !== 0 && board[ny][nx] === current) {
          // 일직선으로 내려가는게 아니라 옆 같은블럭 지울때
          DFS(nx, ny, board, zerocnt, down);
        } else if (board[ny][nx] !== 0 && ny === down) {
          // 일직선으로 내려가고있을때 (같은블럭 x)
          DFS(nx, ny, board, zerocnt, down);
        }
      }
    }
  }

  startPoint.forEach((v) => {
    let whereStart; // 어디서 한줄로 내려갈지
    let endPoint;
    v[0] === 0 ? (whereStart = v[1]) : (whereStart = v[0]); // 한줄로 내려갈 위치
    v[0] === 0
      ? (endPoint = [board.length - 1, v[1]])
      : (endPoint = [v[0], board[0].length - 1]); // 마지막 점
    answer = Math.max(answer, DFS(v[0], v[1], board, 0, whereStart, endPoint));
  });

  return answer;
}
