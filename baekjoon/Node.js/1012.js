let [testCase, ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

let dx = [1, 0, -1, 0];
let dy = [0, -1, 0, 1];

for (let i = 0; i < input.length; i++) {
  input[i] = input[i].split(" ").map((e) => +e);
}

let field,
  until,
  now = 0;
input.forEach((v) => {
  // 테스트케이스 입력받는부분이면
  if (v.length === 3) {
    until = v[2]; // 어디까지 돌지
    now = 0;
    field = Array.from(Array(v[1]), () => Array(v[0]).fill(0)); // 그래프 생성
  } else {
    now++; // 현재 돈 횟수 구하기
    [y, x] = v;
    field[x][y] = 1;

    // 끝부분에 도달했으면 DFS
    if (now === until && now !== 0) {
      let answer = 0;
      function DFS(x, y) {
        for (let i = 0; i < 4; i++) {
          const [nx, ny] = [x + dx[i], y + dy[i]];
          if (
            nx >= 0 &&
            ny >= 0 &&
            nx < field[0].length &&
            ny < field.length &&
            field[ny][nx] === 1
          ) {
            field[ny][nx] = 0;
            DFS(nx, ny);
          }
        }
      }

      for (let i = 0; i < field.length; i++) {
        for (let k = 0; k < field[0].length; k++) {
          if (field[i][k] === 1) {
            DFS(k, i);
            answer++;
          }
        }
      }
      console.log(answer);
    }
  }
});
