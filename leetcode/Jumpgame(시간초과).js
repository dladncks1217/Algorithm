let canJump = function (nums) {
  let answer = true;
  while (nums.length !== 1) {
    if (nums[0] === 0) return false;
    jumpcheck = nums.slice(0, nums[0] + 1);

    if (nums.length > jumpcheck[0] - 1) {
      if (nums[jumpcheck[0]] === 0) {
        nums.shift();
        continue;
      } else {
        nums.splice(0, jumpcheck[0]);
      }
    }
  }
  return answer;
};

console.log(canJump([3, 2, 1, 0, 4]));

// 시간초과
