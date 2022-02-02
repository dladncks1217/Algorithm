// https://www.acmicpc.net/problem/16926
function solution(r, arr) {
  let dx = [0, 1, 0, -1];
  let dy = [1, 0, -1, 0];
  let groupnum = parseInt(Math.max(arr.length, arr[0].length) / 2); // 돌려야 하는 그룹의 개수

  // 몇번돌릴건지
  for (let i = 0; i < r; i++) {
    // 그룹 개수만큼 돌리기
    for (let k = 0; k < groupnum; k++) {
      let x = k;
      let y = k;
      let value = arr[x][y];
      let idx = 0; // 우상좌하순 방향
      while (idx < 4) {
        // 우 상 좌 하 순으로 배열을 돌린다.
        let nx = x + dx[idx];
        let ny = y + dy[idx];

        if (
          // 범위에 있는 경우인지 확인
          nx >= k &&
          ny >= k &&
          nx < arr[0].length - k &&
          ny < arr.length - k
        ) {
          arr[x][y] = arr[nx][ny];
          x = nx;
          y = ny;
        } else idx++; // 벗어나면 방향전환
      }
      arr[k + 1][k] = value;
    }
  }
  return arr;
}

console.log(
  solution(2, [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ])
);
// 자바스크립트로 풀다보니 백준문제를 푸는데 어려움이 있어 프로그래머스 방식이라고 생각하고 풀었습니다.
