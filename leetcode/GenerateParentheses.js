let generateParenthesis = function (n) {
  let answer = [];
  let check = [];

  function DFS(L, left, right) {
    if (L === n * 2) {
      answer.push(check.join(""));
    } else {
      if (left < n) {
        check.push("(");
        DFS(L + 1, left + 1, right);
        check.pop();
      }
      if (left > right) {
        check.push(")");
        DFS(L + 1, left, right + 1);
        check.pop();
      }
    }
  }
  DFS(0, 0, 0);
  return answer;
};

console.log(generateParenthesis(3));
