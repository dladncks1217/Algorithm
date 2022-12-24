const [[N], NList, [M], MList] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

const answer = [];
NList.sort((a, b) => a - b);

function BinarySearch(find, arr) {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (find > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return find === arr[right] ? right : -1;
}

function CountData(index, arr) {
  const findData = arr[index];
  let result = 0;
  let startIndex = index;

  while (index >= 0) {
    startIndex--;
    if (arr[startIndex] !== findData) {
      startIndex++;
      break;
    }
  }

  for (let i = startIndex; i < NList.length; i++) {
    if (arr[i] === findData) result++;
    else break;
  }
  return result;
}

for (let i = 0; i < MList.length; i++) {
  const index = BinarySearch(MList[i], NList);
  index === -1 ? answer.push(0) : answer.push(CountData(index, NList));
}

console.log(answer.join(" "));
