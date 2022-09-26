const [[N], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

// console.log(N, input);

let maxDay = 0;
for (let i = 0; i < input.length; i++) {
  maxDay = Math.max(maxDay, input[i][0]);
}

const arr = Array.from({ length: maxDay + 1 }, () => 0);

input.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return b[1] - a[1];
});

input.forEach((v) => {
  const [index, value] = v;
  if (arr[index] === 0) arr[index] = value;
  else {
    for (let i = index - 1; i >= 1; i--) {
      if (arr[i] === 0) {
        arr[i] = value;
        break;
      }
    }
  }
});

console.log(arr.reduce((sum, i) => (sum += i)));
