const line = require("fs").readFileSync("/dev/stdin", "utf8");

let [firstLine, ...data] = line
  .trim()
  .split("\n")
  .map((v) => Number(v));

const input = data.sort((a, b) => a - b);

console.log(input.join("\n"));
