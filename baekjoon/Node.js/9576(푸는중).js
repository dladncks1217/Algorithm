let [[N], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

function student(N, M, students) {
  const visited = Array.from({ length: N + 1 }, () => -1);
  const target = Array.from({ length: N + 1 }, (_, index) => index);
}

while (N > 0) {
  let answer = 0;

  input.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    return a[1] - b[1];
  });

  const books = Array.from({ length: 1000 + 1 }, () => true);

  for (let i = 0; i < input.length; i++) {
    for (let k = input[i][0]; k <= input[i][1]; k++) {
      if (books[k] === true) {
        books[k] = false;
        answer++;
        break;
      }
    }
  }
  console.log(answer);
  N--;
}
