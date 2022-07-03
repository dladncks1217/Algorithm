let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");
const col = +input.shift();
const row = +input[0].length;

let check = Array(col).fill(Array.from({ length: row }, () => 0));
check[0][0] = 1;

let colorBlind = input.map((v) => {
  v = v.split("");
  v = v.map((k) => {
    if (k === "G") return "R";
    else return k;
  });
  return v;
}); // 색맹

let notColorBlind = input.map((v) => (v = v.split(""))); // 색맹아닌사람

function solution(picture, blind_picture) {
  let answer = [0, 0];

  const dx = [1, 0, -1, 0];
  const dy = [0, -1, 0, 1];

  function DFS(find, x, y, graph) {
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < row &&
        ny < col &&
        graph[ny][nx] === find
      ) {
        graph[ny][nx] = 1;
        DFS(find, nx, ny, graph);
      }
    }
  }

  for (let i = 0; i < picture.length; i++) {
    // 색맹아닌거
    for (let k = 0; k < picture[0].length; k++) {
      if (picture[i][k] !== 1) {
        answer[0]++;
        DFS(picture[i][k], k, i, picture);
      }
    }
  }

  for (let i = 0; i < blind_picture.length; i++) {
    // 색맹인거
    for (let k = 0; k < blind_picture[0].length; k++) {
      if (blind_picture[i][k] !== 1) {
        answer[1]++;
        DFS(blind_picture[i][k], k, i, blind_picture);
      }
    }
  }

  return console.log(answer.join(" "));
}

solution(notColorBlind, colorBlind);
