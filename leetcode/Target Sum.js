let findTargetSumWays = function (nums, target) {
  let answer = 0;
  function DFS(L, sum, index) {
    if (L === nums.length) {
      if (target === sum) return answer++;
    } else {
      DFS(L + 1, sum + nums[index], index + 1);
      DFS(L + 1, sum - nums[index], index + 1);
    }
  }

  DFS(0, 0, 0);
  return answer;
};

console.log(findTargetSumWays([1, 0], 1));
