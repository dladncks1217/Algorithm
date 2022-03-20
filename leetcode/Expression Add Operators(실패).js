let addOperators = function (num, target) {
  num = num.split("");
  num = num.map((v) => parseInt(v));
  let answer = [];

  function DFS(L, sum, index, temp) {
    if (L === num.length) {
      if (sum === target) {
        return answer.push(temp.join(""));
      }
    } else {
      let curr = num[index];
      let prev = num[index - 1];

      temp.push("+");
      temp.push(num[index]);
      DFS(L + 1, sum + num[index], index + 1, temp.slice());
      temp.pop();
      temp.pop();

      temp.push("-");
      temp.push(num[index]);
      DFS(L + 1, sum - num[index], index + 1, temp.slice());
      temp.pop();
      temp.pop();

      temp.push("*");
      temp.push(num[index]);
      DFS(L + 1, sum - prev + prev * curr, index + 1, temp.slice());
      temp.pop();
      temp.pop();
    }
  }

  DFS(1, num[0], 1, [num[0]]);
  return answer;
};

console.log(addOperators("105", 5));
