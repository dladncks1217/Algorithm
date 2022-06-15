const input = require("fs").readFileSync("./dev/stdin").toString();
let num = parseInt(input);
let answer = 0;
while (num >= 5) {
  answer += parseInt(num / 5);
  num /= 5;
}
console.log(answer);
