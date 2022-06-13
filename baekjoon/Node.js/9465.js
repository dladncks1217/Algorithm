let input = require("fs").readFileSync("./dev/stdin").toString().split("\n");
const cases = parseInt(input.shift());

for (let i = 0; i < cases; i++) {
  let length = parseInt(input[i * 3]);
  let one = input[i * 3 + 1].split(" ").map((v) => parseInt(v));
  let two = input[i * 3 + 2].split(" ").map((v) => parseInt(v));

  let dy = [
    Array.from({ length: length }, () => 0),
    Array.from({ length: length }, () => 0),
    Array.from({ length: length }, () => 0),
  ];

  dy[0][0] = one[0]; // 1번시작
  dy[1][0] = two[0]; // 2번시작
  // 3번시작은 0

  for (let i = 1; i < length; i++) {
    dy[0][i] = Math.max(dy[1][i - 1], dy[2][i - 1]) + one[i];
    dy[1][i] = Math.max(dy[0][i - 1], dy[2][i - 1]) + two[i];
    dy[2][i] = Math.max(dy[0][i - 1], dy[1][i - 1]);
  }
  console.log(
    Math.max(dy[0][length - 1], dy[1][length - 1], dy[2][length - 1])
  );
}
