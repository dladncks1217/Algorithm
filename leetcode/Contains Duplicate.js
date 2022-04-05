/**
 * @param {number[]} nums
 * @return {boolean}
 */
let containsDuplicate = function (nums) {
  nums.sort((a, b) => a - b);
  let prev = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (prev === nums[i]) return true;
    prev = nums[i];
  }
  return false;
};
