let input = +require("fs").readFileSync("./dev/stdin").toString();

const dy = Array.from({ length: input + 1 }, () => 0);
dy[1] = 1;
for (let i = 2; i <= input; i++) {
  let min = 4;
  for (let k = 1; k * k <= i; k++) {
    min = Math.min(min, dy[i - k * k]);
  }

  dy[i] = min + 1;
}
console.log(dy[input]);
