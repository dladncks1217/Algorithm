function solution(cakes, cut_rows, cut_columns) {
  let answer = Number.MIN_SAFE_INTEGER; // 맛의 개수 계속 초기화 예정
  let taste = {}; // 케이크 맛 확인용
  let startPoint = [];
  // 케이크를 나타낼 그래프
  let graph = Array.from(Array(cakes.length + cut_rows.length), () =>
    Array(cakes[0].length + cut_columns.length).fill(0)
  );
  let dx = [1, 0, -1, 0];
  let dy = [0, -1, 0, 1];
  cut_rows.unshift(0);
  cut_columns.unshift(0);

  // 케이크의 조각이 되는 부분 정리
  for (let i = 0; i < cut_rows.length; i++) {
    for (let k = 0; k < cut_columns.length; k++) {
      startPoint.push([cut_rows[i], cut_columns[k]]);
    }
  }
  for (let [y, x] of startPoint) {
    graph[y][x] = 1; // 케이크인 부분
  }
  // console.log(graph);

  function DFS(x, y) {
    if (x >= cakes[0].length || y >= cakes.length || x < 0 || y < 0) return;
    if (graph[y][x] === 1) return;
    else {
      for (let i = 0; i < 4; i++) {
        let nx = x + dx[i];
        let ny = y + dy[i];
        if (nx >= cakes[0].length || ny >= cakes.length || nx < 0 || ny < 0)
          continue;
        if (graph[ny][nx] === 0) {
          let caketaste = cakes[nx][ny];
          if (taste.indexOf(caketaste) === -1) {
            taste.caketaste = 1;
          } else {
            taste.caketaste += 1;
          }
          graph[ny][nx] = 2;
          DFS(nx, ny);
        }
      }
    }
  }

  for (let i = 0; i < cakes.length; i++) {
    for (let j = 0; j < cakes.length[0]; j++) {
      if (graph[i][j] === 1) {
        console.log("asdf");
        DFS(i, j); // 시작점에 걸리면 돌리기
      }
    }
  }
  console.log(taste);
  return answer;
}

console.log(
  solution(
    ["AAAACX", "AAAACX", "AAAACX", "ZZZZZX", "ATTTTX", "XUUUUU"],
    [1, 2, 4],
    [2, 3]
  )
);

// 케이크 정확하게 나뉘는점을 기준잡는게 모호함, 구현 방법 재생각 필요
