let combinationSum = function (candidates, target) {
  let result = [];
  let temp = [];
  function DFS(sum, startIndex) {
    if (sum > target) return;
    if (sum === target) {
      result.push(temp.slice());
    } else {
      for (let i = startIndex; i < candidates.length; i++) {
        temp.push(candidates[i]);
        DFS(sum + candidates[i], i);
        temp.pop();
      }
    }
  }
  DFS(0, 0);
  return result;
};

console.log(combinationSum([2, 3, 6, 7], 7));
