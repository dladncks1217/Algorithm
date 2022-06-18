let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
input.pop();

for (let i = 0; i < input.length; i++) {
  let reverseStr = input[i].split("").reverse().join("");
  console.log(input[i] === reverseStr ? "yes" : "no");
}
