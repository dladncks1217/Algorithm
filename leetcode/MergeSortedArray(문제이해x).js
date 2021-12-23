let merge = function (nums1, m, nums2, n) {
  nums1.push(...nums2);
  nums1.sort((a, b) => a - b);
  let newnum = nums1.slice();
  for (let i = 0; i < newnum.length - m - n; i++) {
    nums1.shift();
  }
  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
