const [NC, ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [houseLength, router] = NC.split(" ").map(Number);

const house = input.map(Number);
house.sort((a, b) => a - b);

let min = 1;
let max = Math.max(...house);
let answer = 0;

function intervalCheck(arr, interval) {
  let prev = arr[0]; // (비교할라는거)
  let count = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - prev >= interval) {
      prev = arr[i];
      count++;
    }
  }
  return count;
}

while (min <= max) {
  let mid = Math.floor((min + max) / 2);
  let count = intervalCheck(house, mid);
  if (count >= router) {
    min = mid + 1;
    answer = mid;
  } else {
    max = mid - 1;
  }
}

console.log(answer);
