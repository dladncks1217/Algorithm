let [A, B] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let answer = 0;

// A랑B 같아질때까지
while (A !== B) {
  // A가 더 커지면 답 안나오는 문제 (-1찍기)
  if (A > B) {
    console.log(-1);
    return;
  }

  // 마지막 숫자 1인지 확인하고 그에 따른 동작
  if (isLastNumber_1(B)) {
    B = String(B).split("");
    B.pop();
    B = parseInt(B.join(""));
    answer++;
  } else {
    B = B / 2;
    answer++;
  }
}
// 마지막 숫자 1인지 확인해주는 함수
function isLastNumber_1(number) {
  number = String(number);
  return number[number.length - 1] === "1" ? true : false;
}

console.log(answer + 1);
