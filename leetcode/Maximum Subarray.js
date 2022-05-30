/**
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray = function (nums) {
  let prev = 0;
  let max = -Number.MAX_VALUE;
  nums.forEach((v) => {
    prev = Math.max(prev + v, v);
    max = Math.max(max, prev);
  });
  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
