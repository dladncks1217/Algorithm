const input = +require("fs").readFileSync("./dev/stdin").toString().trim();

function getClapCount(num) {
  let count = 0;
  while (num) {
    if (num % 10 === 3 || num % 10 === 6 || num % 10 === 9) {
      count++;
    }

    num = parseInt(num / 10);
  }
  return count;
}

function problem3(number) {
  let answer = 0;
  for (let i = 1; i <= number; i++) {
    answer += getClapCount(i);
  }
  return answer;
}

console.log(problem3(input));
