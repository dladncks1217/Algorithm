/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
  const result = nums
    .map((data) => String(data))
    .sort((a, b) => (b + a).localeCompare(a + b))
    .join("");

  if (result[0] === "0") return "0";
  return result;
};
