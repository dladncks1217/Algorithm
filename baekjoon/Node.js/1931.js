let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim("")
  .split("\n")
  .map((v) => {
    v = v.split(" ");
    v[0] = parseInt(v[0]);
    v[1] = parseInt(v[1]);
    return v;
  });
input.shift();

let answer = 0;

// console.log(input);

input.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});

let et = 0;
for (let [a, b] of input) {
  if (a >= et) {
    answer++;
    et = b;
  }
}

console.log(answer);
