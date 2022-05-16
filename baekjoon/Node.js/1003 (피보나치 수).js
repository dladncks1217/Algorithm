let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");
input.shift();
input = input.map((v) => parseInt(v));

let one = [0, 1];
let zero = [1, 0];

input.forEach((v) => {
  while (v >= one.length) {
    one.push(one[one.length - 1] + one[one.length - 2]);
    zero.push(zero[zero.length - 1] + zero[zero.length - 2]);
  }
  console.log(`${zero[v]} ${one[v]}`);
});
