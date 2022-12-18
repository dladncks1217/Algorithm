const [[N, M], [Hx, Hy], [Ex, Ey], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

const [startY, startX] = [Hx - 1, Hy - 1];
const [endY, endX] = [Ex - 1, Ey - 1];

const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];

const graph = [
  Array.from({ length: N }, () => Array.from({ length: M }, () => Infinity)), // 벽 안부쉈을 때
  Array.from({ length: N }, () => Array.from({ length: M }, () => Infinity)), // 벽 부쉈을 떄
];
graph[0][startY][startX] = 0;
graph[1][startY][startX] = 0;

const queue = [[startX, startY, 0]]; // x, y, 부순 벽 수
let index = 0;

while (index < queue.length) {
  const [x, y, wallCount] = queue[index];
  for (let i = 0; i < 4; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];
    if (nx >= 0 && ny >= 0 && nx < M && ny < N && wallCount < 2) {
      const prevData = graph[wallCount][y][x]; // 이전 위치 카운트 수
      const wallData = input[ny][nx]; // 이동하려는 위치 벽 유무
      if (wallCount + wallData > 1) continue; // 벽 두개 이상 부수는 케이스 제거
      // 값 갱신 가능한 상황이라면 값 갱신
      if (prevData + 1 < graph[wallCount + wallData][ny][nx]) {
        graph[wallCount + wallData][ny][nx] = prevData + 1;
        queue.push([nx, ny, wallCount + wallData]); // queue.push();
        if (graph[1][ny][nx] > graph[0][ny][nx])
          graph[1][ny][nx] = graph[0][ny][nx];
      }
    }
  }
  index++;
}

const result = Math.min(graph[0][endY][endX], graph[1][endY][endX]);
result === Infinity ? console.log(-1) : console.log(result);
