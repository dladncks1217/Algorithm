const [[N], input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

const check = [];
input.sort((a, b) => a - b);

function binarySearch(target) {
  let left = 0;
  let right = N - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (input[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

for (let i = 0; i < N; i++) {
  for (let k = i + 1; k < N; k++) {
    const find = input[i] + input[k];
    // 아직 안찾은 착한 수일때만.

    if (check.indexOf(find) === -1) {
      let checkNum = binarySearch(find);
      if (find === input[checkNum]) check.push(find);
    }
  }
}
console.log(check);
// console.log(check.length);
