const input = +require("fs").readFileSync("./dev/stdin").toString().trim();

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const check = Array(10).fill(0);

const decreaseNums = [];

if (input >= 1023) console.log(-1);
else {
  function DFS(state, num) {
    if (num !== "") decreaseNums.push(Number(num));
    for (let i = state; i >= 0; i--) {
      if (check[state] === 0) {
        check[state] = 1;
        DFS(i - 1, num + numbers[i]);
        check[state] = 0;
      }
    }
  }

  DFS(9, "");
  decreaseNums.sort((a, b) => a - b);
  console.log(decreaseNums[input]);
}
