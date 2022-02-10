let threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let answer = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let lt = i + 1;
    let rt = nums.length - 1;
    while (lt < rt) {
      let sum = nums[i] + nums[lt] + nums[rt];
      if (sum > 0) rt--;
      else if (sum < 0) lt++;
      else {
        answer.push([nums[lt], nums[i], nums[rt]]);
        while (lt < rt && nums[lt] === nums[lt + 1]) lt++;
        while (lt < rt && nums[rt] === nums[rt - 1]) rt++;
        lt++;
        rt--;
      }
    }
  }
  return answer;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
