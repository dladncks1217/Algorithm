const [[...NM], [...numbers], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

let dy = Array.from({ length: numbers.length }, () => 0);

dy[0] = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  dy[i] = numbers[i] + dy[i - 1];
}

const result = [];
input.forEach((v) => {
  let [start, end] = v;
  if (start === 1) {
    result.push(dy[end - 1]);
  } else {
    result.push(dy[end - 1] - dy[start - 2]);
  }
});

console.log(result.join("\n"));
