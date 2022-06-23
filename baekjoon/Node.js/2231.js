const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString();

const N = parseInt(input);

let M = 0;
for (let i = 0; i < N; i++) {
  let sum = 0;

  const candidate = i;

  const stringValue = candidate.toString();

  for (let j = 0; j < stringValue.length; j++) {
    sum += parseInt(stringValue[j]);
  }

  sum += candidate;

  if (sum == N) {
    M = candidate;
    break;
  }
}

console.log(M);
