function comparebit(bit1, bit2) {
  // 비트 차이 비교
  let diff = 0;
  bit1.forEach((v, i) => {
    v === bit2[i] ? "" : diff++;
  });
  if (diff <= 2) return true;
  else return false;
}
function result(number) {
  let resultTrue = false;
  let results = 0;
  let number2 = number + 1;
  while (resultTrue === false) {
    number = number.toString(2).split("");
    number2 = number2.toString(2).split("");
    if (number.length !== number2.length) {
      number.unshift("0");
    }
    console.log("1번" + number);
    console.log("2번" + number2);
    if (comparebit(number, number2)) {
      resultTrue = true;
      results = parseInt(number2.join(""), 2);
    }
    number = parseInt(number.join(""), 2);
    number2 = parseInt(number2.join(""), 2);
    number2++;
  }
  return results;
}
function solution(numbers) {
  return [result(numbers[0]), result(numbers[1])];
}
console.log(solution([2, 7]));
