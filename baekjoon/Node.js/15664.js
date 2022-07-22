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
  let check = Array.from({ length: arr.length }, () => 0);

  function DFS(L, s) {
    if (L === m) {
      let result = temp.join(" ");
      if (!set.has(result)) {
        set.add(temp.join(" "));
        console.log(temp.join(" "));
      }
    } else {
      for (let i = s; i < arr.length; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          temp.push(arr[i]);
          DFS(L + 1, s + 1);
          temp.pop();
          check[i] = 0;
        }
      }
    }
  }

  DFS(0, 0);
}

solution(arr, length);
