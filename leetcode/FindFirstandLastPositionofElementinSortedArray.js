let searchRange = function (nums, target) {
  let answer = [];
  answer.push(nums.indexOf(target));
  answer.push(nums.lastIndexOf(target));
  return answer;
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
