// https://www.acmicpc.net/problem/1520
function solution(map) {
  let memo = Array.from(Array(map.length), () => Array(map[0].length).fill(0)); // 메모이제이션을 위한 배열
  let dx = [1, 0, -1, 0];
  let dy = [0, -1, 0, 1];
  let queue = []; // bfs를 위한 큐

  queue.push([0, 0]);
  memo[0][0] = 1;
  while (queue.length) {
    let [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i]; // 다음 번지수
      let ny = y + dy[i];
      if (nx < 0 || ny < 0 || nx >= map[0].length || ny >= map.length) continue;
      if (map[ny][nx] < map[y][x]) {
        if (memo[ny][nx] === 0) queue.push([nx, ny]); // 시간초과 막기를 위해 아직 안가본경우만 푸시
        memo[ny][nx] += memo[y][x]; // 그거아니면 메모이제이션된 그래프에서 꺼내오기
      }
    }
  }

  return memo[map.length - 1][map[0].length - 1]; // 마지막 인덱스 리턴
}

console.log(
  solution([
    [50, 45, 37, 32, 30],
    [35, 50, 40, 20, 25],
    [30, 30, 25, 17, 28],
    [27, 24, 22, 15, 10],
  ])
);

// 프로그래머스 형식으로 변형하여 풀었습니다.
