/**
 * @param {number[]} nums
 * @return {number}
 */
let jump = function (nums) {
  let dy = Array.from({ length: nums.length }, () => 0);
  if (nums.length === 1) return 0;
  dy = dy.map((v, i) => {
    return i + 1;
  });

  for (let i = 0; i < dy.length; i++) {
    for (let k = nums[i]; k < dy.length; k++) {
      dy[k] = Math.min(dy[k], dy[k - nums[i]] + 1);
    }
  }
  //   console.log(dy);

  return dy[dy.length - 1];
};

console.log(jump([2, 3, 0, 1, 4]));
