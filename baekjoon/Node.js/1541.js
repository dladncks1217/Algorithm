const input = require("fs").readFileSync("./dev/stdin").toString().trim();

const numbers = input.split("-").map((v) => {
  v = v
    .split("+")
    .map(Number)
    .reduce((a, b) => a + b);
  return v;
});

console.log(numbers.reduce((a, b) => (a -= b)));
