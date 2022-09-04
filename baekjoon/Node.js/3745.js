const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.trim().split(/\s+/g).map(Number);
    return v;
  });

let answer = [];

for (let i = 0; i < input.length; i++) {
  if (i % 2 === 1) {
    let arr = input[i];
    let list = [];

    function binarySearch(target) {
      let left = 0;
      let right = arr.length - 1;

      while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (list[mid] < target) {
          left = mid + 1;
        } else {
          right = mid;
        }
      }
      return right;
    }

    let left = 0;
    let right = 1;
    list.push(arr[0]);

    while (right < arr.length) {
      if (list[left] < arr[right]) {
        left++;
        list[left] = arr[right];
      } else {
        let index = binarySearch(arr[right]);
        list[index] = arr[right];
      }
      right++;
    }
    answer.push(list.length);
  }
}

console.log(answer.join("\n"));
