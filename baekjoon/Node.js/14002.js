const [[length], [...input]] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

// let coordinate = [0, 0];

// let dy = Array.from({ length: input.length + 1 }, () =>
//   Array.from({ length: input.length + 1 }, () => 0)
// );
let dy = Array.from({ length: input.length }, () => 1);

for (let i = 0; i < input.length; i++) {
  let max = 0;
  for (let k = i - 1; k >= 0; k--) {
    if (input[i] > input[k] && dy[k] > max) {
      max = dy[k];
    }
  }
  dy[i] = max + 1;
}

const result = [];
let dybig = Math.max(...dy); // dy값중 제일 큰거
console.log(dybig);
let state = dy.indexOf(dybig); // dy 제일큰거 인덱스
let big = input[state]; // 제일 큰 값
result.push(big); // 값 넣고
for (let i = state - 1; i >= 0; i--) {
  if (dy[i] === dybig - 1) {
    result.push(input[i]);
    dybig = dy[i];
  }
}

console.log(result.reverse().join(" "));
