let threeSumClosest = function (nums, target) {
  let length = nums.length;
  let result = Number.MAX_SAFE_INTEGER;
  let array = Array.from({ length: length }, () => 0);
  console.log(array);
  function DFS(L, sum, check) {
    if (L === 3) {
      if ((target - sum) ** 2 < (target - result) ** 2) result = sum;
    } else {
      for (let i = check; i < length; i++) {
        DFS(L + 1, sum + nums[i], i + 1);
      }
    }
  }
  DFS(0, 0, 0);
  return result;
};

console.log(threeSumClosest([1, 1, 1, 0], -100));
