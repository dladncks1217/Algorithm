/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();

  nums.forEach((data) => {
    if (map.has(data)) {
      map.set(data, map.get(data) + 1);
    } else {
      map.set(data, 1);
    }
  });

  return [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .map((data) => data[0])
    .slice(0, k);
};
