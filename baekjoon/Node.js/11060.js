const [[N], [...input]] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

if (N === 1) {
  console.log(0);
} else {
  let answer = 0;

  const queue = [[0, input[0], 0]];
  const visited = Array.from({ length: N }, () => 0);
  visited[0] = 1;

  while (queue.length) {
    const [index, cost, count] = queue.shift();

    if (index === N - 1) {
      answer = count;
      break;
    }
    for (let i = 1; i <= cost; i++) {
      if (index + i < N && visited[index + i] === 0) {
        visited[index + i] = 1;
        queue.push([index + i, input[index + i], count + 1]);
      }
    }
  }

  answer === 0 ? console.log(-1) : console.log(answer);
}
