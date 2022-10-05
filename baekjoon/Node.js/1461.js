const [[N, M], input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

let result = 0;

const minus = [];
const plus = [];

input.forEach((v) => {
  if (v > 0) plus.push(v);
  else if (v < 0) minus.push(v);
});

if (plus.length && minus.length) {
  plus.sort((a, b) => b - a);
  minus.sort((a, b) => a - b);

  if (Math.abs(plus[0]) > Math.abs(minus[0])) {
    result = plus.shift();
    for (let i = 1; i < M; i++) {
      if (plus.length) plus.shift();
    }
  } else if (Math.abs(plus[0]) < Math.abs(minus[0])) {
    result = Math.abs(minus.shift());
    for (let i = 1; i < M; i++) {
      if (minus.length) minus.shift();
    }
  }

  for (let i = 0; i < plus.length; i++) {
    if (i % M === 0) result += plus[i] * 2;
  }

  for (let i = 0; i < minus.length; i++) {
    if (i % M === 0) result += Math.abs(minus[i]) * 2;
  }

  console.log(result);
} else {
  if (input[0] > 0) {
    input.sort((a, b) => b - a);
  } else {
    input.sort((a, b) => a - b);
  }

  result = Math.abs(input.shift());

  for (let i = 1; i < M; i++) {
    if (input.length) input.shift();
  }

  for (let i = 0; i < input.length; i++) {
    if (i % M === 0) result += Math.abs(input[i]) * 2;
  }

  console.log(result);
}
