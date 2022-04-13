/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let sortColors = function (nums) {
  let zero = 0;
  let one = 0;
  let two = 0;
  let len = nums.length;
  for (let i = len - 1; i >= 0; i--) {
    switch (nums[i]) {
      case 0: {
        zero++;
        break;
      }
      case 1: {
        one++;
        break;
      }
      case 2: {
        two++;
        break;
      }
    }
    nums.pop();
  }
  for (let i = 0; i < zero; i++) nums.push(0);
  for (let i = 0; i < one; i++) nums.push(1);
  for (let i = 0; i < two; i++) nums.push(2);
  return nums;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
