let input = require("fs").readFileSync("./dev/stdin").toString().split("\n");
let result = 0;
input.unshift(...input.shift().split(" "));
input.shift();
let money = parseInt(input.shift());
input.reverse();

input = input.map((v) => parseInt(v));

for (let i = 0; i < input.length; i++) {
  if (money === 0) break;
  if (money >= input[i]) {
    result += parseInt(money / input[i]);
    money = money % input[i];
  }
}

console.log(result);
