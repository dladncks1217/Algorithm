function changebit(num, comparenum) {
  num = num.toString(2).split("");
  comparenum = comparenum.toString(2).split("");
  num.reverse();
  comparenum.reverse();
  if (comparenum.length < num.length) {
    num.push("0");
  }
  comparenum = comparenum.filter((v, i) => {
    return v !== num[i];
  });
  if (comparenum.length <= 2) return true;
  else return false;
}

function solution(numbers) {
  let answer = [];

  for (let i = numbers[0] + 1; ; i++) {
    let result = changebit(numbers[0], i);
    if (result) {
      answer.push(i);
      break;
    }
  }
  for (let i = numbers[1] + 1; ; i++) {
    let result = changebit(numbers[1], i);
    if (result) {
      answer.push(i);
      break;
    }
  }

  return answer;
}
console.log(solution([2, 7]));
