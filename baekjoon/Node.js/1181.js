const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();
const set = new Set(input);
const result = [...set];

result.sort((a, b) => {
  if (a.length === b.length) return a - b || a.localeCompare(b);
  return a.length - b.length;
});

console.log(result.join("\n"));
