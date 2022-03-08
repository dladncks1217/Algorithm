/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
let nextGreaterElement = function (nums1, nums2) {
  let answer = [];
  nums1.forEach((v) => {
    let check = nums2.indexOf(v);
    if (check === -1) {
      answer.push(-1);
    } else {
      while (true) {
        if (check + 1 > nums2.length) {
          answer.push(-1);
          break;
        }

        if (nums2[check] > v) {
          answer.push(nums2[check]);
          break;
        } else {
          check++;
        }
      }
    }
  });
  return answer;
};

console.log(
  nextGreaterElement([3, 1, 5, 7, 9, 2, 6], [1, 2, 3, 5, 6, 7, 9, 11])
);
