// 다시풀어야할듯
const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

const arr = [];
input.forEach((v) => {
  let temp = [];
  let resultTemp = [];
  for (let i = 0; i < v.length; i++) {
    temp.push(v[i]);
    if (temp.length === 3) {
      resultTemp.push(temp);
      temp = [];
    }
  }
  arr.push(resultTemp);
});

const team1 = [0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4];
const team2 = [1, 2, 3, 4, 5, 2, 3, 4, 5, 3, 4, 5, 4, 5, 5];

let isFinished = false;
const match = Array.from({ length: 6 }, () => Array(3).fill(0));
const result = Array(4).fill(0);

function DFS(round) {
  if (isFinished) return;
  if (round === 15) {
    for (let k = 0; k < 4; k++) {
      // 이미 가능한 경우면 컨티뉴
      if (result[k]) continue;
      let same = true;
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 3; j++) {
          if (arr[k][i][j] !== match[i][j]) {
            same = false;
            break;
          }
        }
        if (!same) break;
      }
      if (same) {
        result[k] = 1;
        if (result.reduce((acc, cur) => acc + cur, 0) === 4) {
          finished = true;
        }
      }
    }
    return;
  }

  const t1 = team1[round];
  const t2 = team2[round];

  match[t1][0]++;
  match[t2][2]++;
  DFS(round + 1);
  match[t1][0]--;
  match[t2][2]--;

  match[t1][2]++;
  match[t2][0]++;
  DFS(round + 1);
  match[t1][2]--;
  match[t2][0]--;

  match[t1][1]++;
  match[t2][1]++;
  DFS(round + 1);
  match[t1][1]--;
  match[t2][1]--;
}

DFS(0, 1, 0);

console.log(result.join(" "));
