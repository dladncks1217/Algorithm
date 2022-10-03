const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const answer = [];

let index = 0;
let N = +input[index++];
while (N--) {
  let num = +input[index++];
  let result = "YES";

  let arr = Array.from({ length: num }, () => 0)
    .map(() => input[index++])
    .sort();

  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] === arr[i].slice(0, arr[i - 1].length)) {
      result = "NO";
      break;
    }
  }
  answer.push(result);
}

console.log(answer.join("\n"));
