const [[length], [...input]] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

let dy = Array.from({ length: length }, () => 0);

dy[0] = input[0];

for (let i = 1; i < length; i++) {
  dy[i] = Math.max(input[i], input[i] + dy[i - 1]);
}

console.log(Math.max(...dy));
