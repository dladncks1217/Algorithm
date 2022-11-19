// 친구알려주기용
let input = require("fs")
  .readFileSync("asdf.txt")
  .toString()
  .trim()
  .split("\n");

const [height, width] = input.shift().split(" ").map(Number);

const graph = input.map((v) => {
  v = v.split("");
  return v;
});

let answer = 0; // 출력할 정답
const dx = [1, 1, 0, -1, -1, -1, 0, 1]; // 이동할 수 있는 경우의 수 정리 (상하좌우, 대각선)
const dy = [0, -1, -1, -1, 0, 1, 1, 1];

function DFS(x, y) {
  for (let i = 0; i < 8; i++) {
    const nx = x + dx[i]; //나올 수 있는 좌표 계산 (8가지 경우의 수)
    const ny = y + dy[i];

    // 좌표 자체가 유효한지 판별
    if (nx >= 0 && ny >= 0 && nx < width && ny < height) {
      // 들어가려는 좌표가 들어가도 되는 좌표인지 확인(싱크홀인가?)
      if (graph[ny][nx] === "W") {
        graph[ny][nx] = "."; // 탐색 완료했으면 다시 못들어오도록 W를 '.'으로 변경
        DFS(nx, ny); // 좌표 이동
      }
    }
  }
}

for (let i = 0; i < height; i++) {
  for (let k = 0; k < width; k++) {
    // 모든 좌표 탐색하며 싱크홀 만나면 DFS탐색
    if (graph[i][k] === "W") {
      // 하나의 싱크홀 만난것이니 answer++
      answer++;
      graph[i][k] = "."; // 싱크홀 시작점도 .으로 변경해줌
      DFS(k, i); // 만난 싱크홀 DFS탐색 시작
    }
  }
}

console.log(answer);
