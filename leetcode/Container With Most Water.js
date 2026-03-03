/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let answer = 0;
  let leftIndex = 0;
  let rightIndex = height.length - 1;

  while (leftIndex < rightIndex) {
    const left = height[leftIndex];
    const right = height[rightIndex];
    const width = rightIndex - leftIndex;

    const waterAmount = width * Math.min(left, right);
    answer = Math.max(answer, waterAmount);

    if (left > right) rightIndex--;
    else leftIndex++;
  }

  return answer;
};
