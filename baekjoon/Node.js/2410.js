const input = +require("fs").readFileSync("./dev/stdin").toString();

let dy = Array.from({ length: input + 1 }, () => 0);

dy[1] = 1;
dy[2] = 2;

for (let i = 3; i <= input; i++) {
  if (i % 2) dy[i] = dy[i - 1];
  else dy[i] = (dy[i - 1] + dy[Math.floor(i / 2)]) % 1000000000;
}

console.log(dy[input]);
