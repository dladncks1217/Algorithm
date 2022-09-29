const [[N], input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

input.sort((a, b) => a - b);

if (input[0] === 1 && input.length > 1) {
  const prefix_sum = [];

  let sum = input[0];
  prefix_sum.push(input[0]);
  for (let i = 1; i < input.length; i++) {
    sum += input[i];
    prefix_sum[i] = sum;
  }

  // console.log(input);
  // console.log(prefix_sum);

  let curr = [input[0], prefix_sum[1]];

  for (let i = 2; i < input.length; i++) {
    const temp = input[i];
    const next = [curr[0] + temp, curr[1] + temp];

    if (next[0] - curr[1] > 1) {
      console.log(curr[1] + 1);
      break;
    } else {
      curr = [curr[0], next[1]];
    }
    if (i === input.length - 1) console.log(next[1] + 1);
  }
} else if (input[0] === 1 && input.length === 1) {
  console.log(2);
} else {
  console.log(1);
}
