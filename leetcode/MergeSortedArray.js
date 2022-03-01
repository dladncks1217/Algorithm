let merge = function (nums1, m, nums2, n) {
  num1 = nums1.filter((v, i) => {
    if (i < m) {
      console.log(v);
      return toString(v);
    }
  });
  console.log(num1);
  num2 = nums2.filter((v, i) => {
    if (i < n) {
      return toString(v);
    }
  });
  num1.push(...num2);

  num1.sort((a, b) => a - b);
  num1.forEach((v, i) => {
    nums1[i] = v;
  });
  console.log(nums1);
};
console.log(merge([-1, 0, 1, 1, 0, 0, 0, 0, 0], 4, [-1, 0, 2, 2, 3], 5));
