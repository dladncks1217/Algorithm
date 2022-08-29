const [[length], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

const NK = [];
const numbers = [];

for (let i = 0; i < input.length; i++) {
  if (i % 2 === 0) {
    NK.push(input[i].slice());
  } else {
    numbers.push(input[i].slice());
  }
}

// console.log(NK, numbers);

const answer = [];

for (let i = 0; i < length; i++) {
  const [N, K] = NK[i];
  const arr = numbers[i];
  arr.sort((a, b) => a - b);

  let left = 0;
  let right = N - 1;
  let min = arr[left] + arr[right];
  let count = 1;
  console.log(arr);
  console.log(min);
  while (left < right) {
    console.log(left, right);

    let minCheck = 0;

    if (min <= K) {
      left++;
      if (
        (arr[left] >= 0 && arr[right] >= 0) ||
        (arr[left] < 0 && arr[right] < 0)
      ) {
        minCheck = arr[right] - arr[left];
      } else {
        minCheck = arr[right] + arr[left];
      }

      if (min > minCheck && minCheck !== K) {
        // console.log(left, right, min, minCheck);
        min = minCheck;
        count = 1;
      } else if (min === minCheck && minCheck !== K) {
        count++;
      }
    } else {
      right--;

      if (
        (arr[left] >= 0 && arr[right] >= 0) ||
        (arr[left] < 0 && arr[right] < 0)
      ) {
        minCheck = arr[right] - arr[left];
      } else {
        minCheck = arr[right] + arr[left];
      }

      if (min > minCheck && minCheck !== K) {
        min = minCheck;
        count = 1;
      } else if (min === minCheck && minCheck !== K) {
        count++;
      }
    }
    console.log(minCheck);
  }

  answer.push([count, min]);
}

console.log(answer);
