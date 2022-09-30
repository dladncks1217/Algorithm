const [[N], arr] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

let result = 0;

let temp = [];
function merge(start, end) {
  let mid = Math.floor((start + end) / 2);
  let leftIndex = start;
  let rightIndex = mid + 1;
  let k = start;
  let count = 0;

  while (leftIndex <= mid && rightIndex <= end) {
    if (arr[leftIndex] <= arr[rightIndex]) {
      temp[k++] = arr[leftIndex++];
      result += count;
    } else {
      temp[k++] = arr[rightIndex++];
      count++;
    }
  }

  if (leftIndex > mid) {
    let check = rightIndex;
    while (check <= end) {
      temp[k++] = arr[check++];
      count++;
    }
  } else {
    let check = leftIndex;
    while (check <= mid) {
      temp[k++] = arr[check++];
      result += count;
    }
  }

  for (let i = start; i <= end; i++) {
    arr[i] = temp[i];
  }
}

function mergeSort(start, end) {
  if (start < end) {
    let mid = Math.floor((start + end) / 2);
    mergeSort(start, mid);
    mergeSort(mid + 1, end);
    merge(start, end);
  }
}

mergeSort(0, arr.length - 1);

console.log(result);
