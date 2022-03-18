let addOperators = function (num, target) {
  num = num.split("");
  let answer = [];
  //   let operators = ["+", "-", "*"];

  function DFS(L, sum, index, temp) {
    if (L === num.length) {
      //   console.log(sum + parseInt(num[index]));
      //   console.log(sum - num[index]);
      //   console.log(sum * num[index]);

      if (sum === target) {
        answer.push(temp.slice());
      }
    } else {
      temp.push(num[index]);
      temp.push("+");
      DFS(L + 1, sum + parseInt(num[index]), index + 1, temp.slice());

      while (typeof temp[temp.length] !== "number") temp.pop();

      temp.push("-");
      DFS(L + 1, sum - parseInt(num[index]), index + 1, temp.slice());

      while (typeof temp[temp.length] !== "number") temp.pop();

      temp.push("*");
      DFS(L + 1, sum * parseInt(num[index]), index + 1, temp.slice());

      while (typeof temp[temp.length] !== "number") temp.pop();
    }
  }

  DFS(0, 0, 0, []);
  return answer;
};

console.log(addOperators("123", 6));
