let input = require("fs").readFileSync("./dev/stdin").toString().split("\n");
let result = 0;
input.shift();
input = input[0].split(" ");
input = input.map((v) => parseInt(v));
input.sort((a, b) => a - b);
for (let i = 1; i < input.length; i++) {
  input[i] += input[i - 1];
}
input.forEach((v) => {
  result += v;
});
console.log(result);
