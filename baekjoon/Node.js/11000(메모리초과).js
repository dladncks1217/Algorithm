let input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");
input.shift();
input = input.map((v) => {
  v = v.split(" ");
  v = v.map((v) => parseInt(v));
  return v;
});

input.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});

let answer = 0;
let temp = [];
let classes = input.length;

while (classes) {
  let et = 0;
  input.forEach((v) => {
    if (et <= v[0]) {
      et = v[1];
      classes--;
    } else temp.push(v);
  });

  input = temp.map((v) => v);

  answer++;
}

console.log(answer);
