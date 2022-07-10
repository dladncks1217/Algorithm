const [[houses], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map((v) => +v);
    return v;
  });

for (let i = 1; i < input.length; i++) {
  input[i][0] += Math.min(input[i - 1][1], input[i - 1][2]);
  input[i][1] += Math.min(input[i - 1][0], input[i - 1][2]);
  input[i][2] += Math.min(input[i - 1][0], input[i - 1][1]);
}
console.log(Math.min(...input[houses - 1]));
