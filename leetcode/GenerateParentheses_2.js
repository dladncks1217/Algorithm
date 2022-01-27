let generateParenthesis = function (n) {
  let answer = [];

  function DFS(str, left, right) {
    if (str.length === n * 2) {
      answer.push(str);
    } else {
      if (left < n) {
        DFS(str + "(", left + 1, right);
      }
      if (left > right) {
        DFS(str + ")", left, right + 1);
      }
    }
  }
  DFS("", 0, 0);
  return answer;
};

console.log(generateParenthesis(3));
