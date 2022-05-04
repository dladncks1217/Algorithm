/**
 * @param {number[]} nums
 * @return {number}
 */
let rob = function (nums) {
  let curr = 0;
  let prev = 0;
  let temp;
  nums.forEach((v) => {
    temp = curr;
    curr = Math.max(v + prev, curr);
    prev = temp;
  });

  return curr;
};

console.log(rob([2, 1, 1, 2]));
