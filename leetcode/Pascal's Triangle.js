let generate = function (numRows) {
  let answer = [];
  for (let i = 1; i <= numRows; i++) {
    let check = [];
    console.log(answer);
    for (let k = 1; k <= i; k++) {
      if (k === 1 || k === i) check.push(1);
      else {
        check.push(answer[i - 2][k - 2] + answer[i - 2][k - 1]);
      }
    }
    answer.push(check);
  }

  return answer;
};

console.log(generate(5));
