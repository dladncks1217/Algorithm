const [[N], [...input]] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ").map(Number);
    return v;
  });

let list = []; // 하나씩 순서대로 숫자들 담을 배열
list.push(input[0]); // 첫 숫자 갖다넣기
const dy = [0];

// 이진탐색
function binarySearch(target) {
  let left = 0;
  let right = N - 1;

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
while (right < N) {
  // list마지막 수가 들어갈 수보다 크면 일단 넣기
  if (list[left] < input[right]) {
    left++;
    list[left] = input[right];
    dy[right] = left;
  } else {
    // list 마지막 수가 들어갈 수보다 작다면 어디에 들어가야하는건지 찾기
    let index = binarySearch(input[right]);
    list[index] = input[right];
    dy[right] = index;
  }
  right++;
}
// 순서대로 들어간 수들 길이 출력
console.log(list.length);

const answer = [];
let max = Math.max(...dy);
answer.push(input[dy.indexOf(max)]);
for (let i = dy.indexOf(max) - 1; i >= 0; i--) {
  if (dy[i] + 1 === max) {
    max = dy[i];
    answer.push(input[i]);
  }
}

console.log(answer.reverse().join(" "));
