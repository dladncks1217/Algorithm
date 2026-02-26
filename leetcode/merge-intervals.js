/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const answer = [];
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);

  let target = sortedIntervals.shift();
  let targetStartPoint = target[0];
  let targetEndPoint = target[1];
  while (sortedIntervals.length) {
    // 머지해야하면
    if (targetEndPoint >= sortedIntervals[0][0]) {
      targetEndPoint = Math.max(targetEndPoint, sortedIntervals[0][1]);
      sortedIntervals.shift();
    } else {
      // 머지 안해도 되는상태면
      answer.push([targetStartPoint, targetEndPoint]);
      target = sortedIntervals.shift();
      targetStartPoint = target[0];
      targetEndPoint = target[1];
    }
  }
  answer.push([targetStartPoint, targetEndPoint]);

  return answer;
};
