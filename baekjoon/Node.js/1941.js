const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split("");
    return v;
  });

// 정답
let answer = 0;

const dx = [1, 0, -1, 0];
const dy = [0, -1, 0, 1];

// 조합위한 students배열
const students = [];
const studentVisit = Array.from({ length: 25 }, () => 0);
for (let i = 0; i < 5; i++) {
  for (let k = 0; k < 5; k++) students.push(input[i][k]);
}

// 조합들 담을 임시 배열
const temp = [];

function Combination(L, s, dasom, doyeon) {
  // 만약 다솜파가 4명 이상일경우
  if (L === 7 && dasom >= 4) {
    // 시작점
    const startX = temp[0] % 5;
    const startY = Math.floor(temp[0] / 5);

    // 방문확인용
    const visited = Array.from({ length: 5 }, () =>
      Array.from({ length: 5 }, () => 0)
    );

    // 조합 그래프
    const check = Array.from({ length: 5 }, () =>
      Array.from({ length: 5 }, () => 0)
    );
    for (let i = 0; i < 7; i++) {
      const x = temp[i] % 5;
      const y = Math.floor(temp[i] / 5);
      check[y][x] = 1;
    }

    // 연결확인할때써먹을변수
    let count = 1;

    // 체크 함수
    function isConnected(x, y) {
      if (count === 7) {
        return answer++;
      } else {
        for (let i = 0; i < 4; i++) {
          const [nx, ny] = [x + dx[i], y + dy[i]];

          if (nx >= 0 && ny >= 0 && nx < 5 && ny < 5) {
            if (check[ny][nx] === 1 && visited[ny][nx] === 0) {
              count++;
              visited[ny][nx] = 1;
              isConnected(nx, ny);
            }
          }
        }
      }
    }

    visited[startY][startX] = 1;
    isConnected(startX, startY);

    count = 1;
  } else {
    for (let i = s; i < 25; i++) {
      if (studentVisit[i + 1] === 0) {
        studentVisit[i + 1] = 1;
        temp.push(i + 1);
        if (students[i + 1] === "S")
          Combination(L + 1, i + 1, dasom + 1, doyeon);
        else Combination(L + 1, i + 1, dasom, doyeon + 1);
        studentVisit[i + 1] = 0;
        temp.pop();
      }
    }
  }
}

Combination(0, -1, 0, 0);

console.log(answer);
