let searchInsert = function (nums, target) {
  let result = nums.indexOf(target);
  if (result === -1) {
    nums.push(target);
    nums.sort((a, b) => a - b);
    result = nums.indexOf(target);
  }
  return result;
};
console.log(searchInsert([1, 3, 5, 6], 2));
