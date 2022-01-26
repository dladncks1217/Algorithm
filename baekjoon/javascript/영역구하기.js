// https://www.acmicpc.net/problem/2583
function solution(M, N, arr) {
  let answer = 0;
  let count = 0;
  let answer2 = [];
  let map = Array.from(Array(M), () => Array(N).fill(0));
  let dx = [0, 1, 0, -1];
  let dy = [1, 0, -1, 0];
  // 모눈종이에 그려진 직사각형에 대해 인접행렬로 표현하였습니다. 직사각형부분이 1입니다.
  arr.forEach((v) => {
    for (let i = v[1]; i < v[3]; i++) {
      for (let k = v[0]; k < v[2]; k++) {
        map[i][k] = 1;
      }
    }
  });

  function DFS(x, y) {
    map[y][x] = 1; // 이미 돌은 영역 체크
    count++; // 영역의 넓이를 ++해줍니다.
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx >= 0 && nx < N && ny >= 0 && ny < M && map[ny][nx] === 0) {
        DFS(nx, ny);
      }
    }
  }

  // 그래프를 모두 돌면서 남은 영역의 일부일경우 DFS를 돌립니다. (0을 만나면 DFS를 돌립니다.)
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (map[i][j] === 0) {
        count = 0; // 영역 넓이는 DFS들어가기 전 계속 초기화해줍니다.
        answer++; // 영역 개수를 ++해줍니다.
        DFS(j, i);
        answer2.push(count);
        console.log(map);
      }
    }
  }
  answer2.sort((a, b) => a - b);
  return [answer, answer2];
}

console.log(
  solution(5, 7, [
    [0, 2, 4, 4],
    [1, 1, 2, 5],
    [4, 0, 6, 2],
  ])
);

/* 프로그래머스 방식으로 변형하여 풀음 */
