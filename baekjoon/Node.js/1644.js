const input = +require("fs").readFileSync("./dev/stdin").toString().trim();

let arr = Array.from({ length: input + 1 }, () => true).fill(false, 0, 2);

// 에라토스테네스의 체
for (let i = 2; i * i <= input; i++) {
  if (arr[i]) {
    for (let j = i * i; j <= input; j += i) {
      arr[j] = false;
    }
  }
}

let resultArr = [];
arr.forEach((v, i) => {
  if (v === true) resultArr.push(i);
});

const arrLength = resultArr.length;
let answer = 0;
let left = 0;
let right = 0;
let sum = resultArr[0];

while (left < arrLength && right < arrLength) {
  if (sum === input) {
    answer++;
    right++;
    sum += resultArr[right];
  }
  if (sum > input) {
    sum -= resultArr[left];
    left++;
  } else {
    right++;
    sum += resultArr[right];
  }
}

resultArr.indexOf(input) !== -1 && answer === 0
  ? console.log(1)
  : console.log(answer);
