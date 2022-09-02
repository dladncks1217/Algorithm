const [word1, word2, word3] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const dy = Array.from({ length: word1.length + 1 }, () =>
  Array.from({ length: word2.length + 1 }, () =>
    Array.from({ length: word3.length + 1 }).fill(0)
  )
);

for (let i = 1; i < dy.length; i++) {
  for (let j = 1; j < dy[0].length; j++) {
    for (let k = 1; k < dy[0][0].length; k++) {
      if (word1[i - 1] === word2[j - 1] && word1[i - 1] === word3[k - 1]) {
        dy[i][j][k] = dy[i - 1][j - 1][k - 1] + 1;
      } else {
        dy[i][j][k] = Math.max(
          dy[i - 1][j][k],
          dy[i][j - 1][k],
          dy[i][j][k - 1]
        );
      }
    }
  }
}

console.log(dy[word1.length][word2.length][word3.length]);
