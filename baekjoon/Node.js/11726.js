const input = +require("fs").readFileSync("./dev/stdin").toString().trim();

const dy = Array.from({ length: input + 1 }, () => 0);

dy[1] = 1;
dy[2] = 2;
let length = dy.length;
for (let i = 3; i <= length; i++) {
  dy[i] = (dy[i - 1] + dy[i - 2]) % 10007;
}

console.log(dy[input]);
