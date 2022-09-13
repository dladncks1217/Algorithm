const path = require("path");
const inputs = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const games = inputs.slice(0, 4).map((input) =>
  input
    .split(" ")
    .map(Number)
    .reduce(
      (acc, _, i, arr) =>
        i === 2 || i % 3 === 2 ? acc.concat([arr.slice(i - 2, i + 1)]) : acc,
      []
    )
);

console.log(games);

let finished = false;
const match = Array.from({ length: 6 }, () => Array(3).fill(0));
const result = Array(4).fill(0);

const team1 = [0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4];
const team2 = [1, 2, 3, 4, 5, 2, 3, 4, 5, 3, 4, 5, 4, 5, 5];

const dfs = (round) => {
  if (finished) return;
  if (round === 15) {
    for (let k = 0; k < 4; k++) {
      if (result[k]) continue;
      let same = true;
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 3; j++) {
          if (games[k][i][j] !== match[i][j]) {
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

  const [t1, t2] = [team1[round], team2[round]];

  match[t1][0]++;
  match[t2][2]++;
  dfs(round + 1);
  match[t1][0]--;
  match[t2][2]--;

  match[t1][2]++;
  match[t2][0]++;
  dfs(round + 1);
  match[t1][2]--;
  match[t2][0]--;

  match[t1][1]++;
  match[t2][1]++;
  dfs(round + 1);
  match[t1][1]--;
  match[t2][1]--;
};

dfs(0, 1, 0);
console.log(result.join(" "));
