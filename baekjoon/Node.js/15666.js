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
  let set = new Set();
  let temp = [];
  function DFS(L) {
    if (L === m) {
      let result = temp.join(" ");
      if (!set.has(result)) {
        set.add(result);
        console.log(result);
      }
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (!temp.length || temp[temp.length - 1] <= arr[i]) {
          temp.push(arr[i]);
          DFS(L + 1);
          temp.pop();
        }
      }
    }
  }

  DFS(0);
}

solution(arr, length);
