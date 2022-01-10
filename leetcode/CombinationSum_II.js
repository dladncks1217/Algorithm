let combinationSum2 = function (candidates, target) {
  let answer = [];
  let temp = [];
  candidates.sort((a, b) => a - b);
  function DFS(L, sum) {
    if (sum > target) return;
    if (sum === target) {
      answer.push(temp.slice());
      return;
    } else {
      for (let i = L; i < candidates.length; i++) {
        if (i > L && candidates[i] === candidates[i - 1]) continue;
        temp.push(candidates[i]);
        DFS(i + 1, sum + candidates[i]);
        temp.pop();
      }
    }
  }
  DFS(0, 0);
  return answer;
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
