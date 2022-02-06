// https://www.acmicpc.net/problem/7576
function solution(tomato) {
  let answer = 0;
  let dx = [0, 1, 0, -1];
  let dy = [1, 0, -1, 0];
  let queue = [];

  for (let i = 0; i < tomato[0].length; i++) {
    for (let k = 0; k < tomato.length; k++) {
      if (tomato[k][i] === 1) {
        queue.push([i, k]);
      }
    }
  }

  while (queue.length) {
    let change = false;
    let riped = queue.length;
    for (let k = 0; k < riped; k++) {
      let [x, y] = queue.shift();
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];

        if (
          ny >= 0 &&
          nx >= 0 &&
          ny < tomato.length &&
          nx < tomato[0].length &&
          tomato[ny][nx] === 0
        ) {
          change = true;
          tomato[ny][nx] = 1;
          queue.push([nx, ny]);
        }
      }
    }
    if (change === false) break;
    answer++;
  }

  for (let i = 0; i < tomato.length; i++) {
    if (tomato[i].includes(0)) return -1;
  }

  return answer;
}

console.log(
  solution([
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1],
  ])
);
console.log(
  solution([
    [1, -1, 0, 0, 0, 0],
    [0, -1, 0, 0, 0, 0],
    [0, 0, 0, 0, -1, 0],
    [0, 0, 0, 0, -1, 1],
  ])
);
console.log(
  solution([
    [-1, 1, 0, 0, 0],
    [0, -1, -1, -1, 0],
    [0, -1, -1, -1, 0],
    [0, -1, -1, -1, 0],
    [0, 0, 0, 0, 0],
  ])
);
