const input = +require("fs").readFileSync("./dev/stdin").toString().trim();

let sum = 0;
let num = 1;
let count = 0;

while (true) {
  sum += num;
  count++;
  if (sum > input) {
    console.log(count - 1);
    break;
  }
  num++;
}
