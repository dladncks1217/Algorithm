const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const money = parseInt(input[0]);
const arr = [1, 2, 5, 7];
let dy = Array.from({ length: money + 1 }, () => money);
dy[0] = 0;

for (let i = 0; i < arr.length; i++) {
  for (let k = arr[i]; k < dy.length; k++) {
    dy[k] = Math.min(dy[k], dy[k - arr[i]] + 1);
  }
}

console.log(dy[dy.length - 1]);
