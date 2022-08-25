const [[N], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ");
    return v;
  });

let answer = "NO";

// 선생님들 위치 미리 구하기
const teachers = [];
for (let i = 0; i < input.length; i++) {
  for (let k = 0; k < input[0].length; k++) {
    if (input[i][k] === "T") teachers.push([k, i]); // 선생님들 좌표 (x,y)
  }
}

// 선생님들의 학생찾기
function search(x, y) {
  let result = false;
  // 좌
  for (let i = x; i >= 0; i--) {
    if (input[y][i] === "O") break;
    if (input[y][i] === "S") {
      result = true;
      return result;
    }
  }
  // 우
  for (let i = x; i < input[0].length; i++) {
    if (input[y][i] === "O") break;
    if (input[y][i] === "S") {
      result = true;
      return result;
    }
  }
  // 상
  for (let i = y; i >= 0; i--) {
    if (input[i][x] === "O") break;
    if (input[i][x] === "S") {
      result = true;
      return result;
    }
  }
  // 하
  for (let i = y; i < input.length; i++) {
    if (input[i][x] === "O") break;
    if (input[i][x] === "S") {
      result = true;
      return result;
    }
  }
  return result;
}

// 벽 만들기 완전탐색
function makeWalls(count) {
  if (count === 3) {
    let result = "YES";
    for (let i = 0; i < teachers.length; i++) {
      const [x, y] = teachers[i];
      if (search(x, y)) {
        result = "NO";
        break;
      }
    }
    if (result === "YES") answer = "YES";
  } else {
    for (let i = 0; i < input.length; i++) {
      for (let k = 0; k < input[0].length; k++) {
        if (input[i][k] === "X") {
          input[i][k] = "O";
          makeWalls(count + 1);
          //   if (check) return;
          input[i][k] = "X";
        }
      }
    }
  }
}

makeWalls(0);

console.log(answer);
