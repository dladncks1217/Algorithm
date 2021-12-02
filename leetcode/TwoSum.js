//leetcode.com/problems/two-sum/
https: var twoSum = function (nums, target) {
  const maps = new Map();
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    if (maps[nums[i]] >= 0) {
      return [maps[nums[i]], i];
    }

    maps[target - nums[i]] = i;
  }
  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
