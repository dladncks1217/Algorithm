var findKthLargest = function (nums, k) {
  for (let i = 0; i < k - 1; i++) {
    let max = Math.max(...nums);
    nums.splice(nums.indexOf(max), 1);
  }
  return Math.max(...nums);
};
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));

// 퀵소트로 한번 더 풀기 (시간복잡도 많이안좋음)
