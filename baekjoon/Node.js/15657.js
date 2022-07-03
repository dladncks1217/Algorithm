const [check, input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim("")
  .split("\n");

let length = +check.split(" ")[1];
const arr = input
  .split(" ")
  .map((v) => +v)
  .sort((a, b) => a - b);

function solution(arr, m) {
  let temp = [];
  function DFS(L, s) {
    if (L === m) {
      console.log(temp.join(" "));
    } else {
      for (let i = s; i < arr.length; i++) {
        temp.push(arr[i]);
        DFS(L + 1, i);
        temp.pop();
      }
    }
  }

  DFS(0, 0);
}

solution(arr, length);
