let singleNumber = function (nums) {
  nums = nums.sort();
  let stack = [];
  nums.forEach((v) => {
    if (stack.indexOf(v) === -1) {
      stack.push(v);
    } else {
      stack.pop();
    }
  });
  return stack[0];
};
