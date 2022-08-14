const [A, B] = require("fs").readFileSync("./dev/stdin").toString().split("\n");

let dy = Array.from({ length: B.length + 1 }, () =>
  Array.from({ length: A.length + 1 }, () => 0)
);

let answer = 0;
for (let i = 1; i < dy.length; i++) {
  for (let k = 1; k < dy[0].length; k++) {
    if (B[i - 1] === A[k - 1]) {
      dy[i][k] = dy[i - 1][k - 1] + 1;
      if (answer < dy[i][k]) answer = dy[i][k];
    }
  }
}

console.log(answer);
