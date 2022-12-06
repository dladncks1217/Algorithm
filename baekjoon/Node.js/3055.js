const [RC, ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .split("\n");

const [R, C] = RC.split(" ").map(Number);
const graph = input.map((v) => {
  v = v.split("");
  return v;
});
