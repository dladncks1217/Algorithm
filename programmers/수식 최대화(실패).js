function solution(expression) {
  let answer = 0;
  const prior = [
    ["+", "-", "*"],
    ["+", "*", "-"],
    ["-", "+", "*"],
    ["-", "*", "+"],
    ["*", "+", "-"],
    ["*", "-", "+"],
  ];
  let numbers = [];
  let operators = [];
  let numoper = [];
  let j = 0;
  expression.split("").forEach((v) => {
    if (v === "+" || v === "-" || v === "*") {
      operators.push(v);
    }
  });
  numbers = expression
    .split("+")
    .join(".")
    .split("-")
    .join(".")
    .split("*")
    .join(".")
    .split(".");

  for (let i = 0; i < numbers.length; i++) {
    if (numoper.length % 2 !== 0) {
      numoper.push(operators[j]);
      j++;
      i--;
      continue;
    }
    numoper.push(numbers[i]);
  }
  console.log(numoper);

  return answer;
}

console.log(solution("100-200*300-500+20"));
