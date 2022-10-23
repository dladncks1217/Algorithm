const input = require("fs").readFileSync("./dev/stdin").toString().trim();

const T = Number(input);

const fibo = [0, 1, 1];
for (let i = 3; i <= T; i++)
  fibo.push((fibo[i - 2] + fibo[i - 1]) % 1000000007);

console.log(fibo[T]);
