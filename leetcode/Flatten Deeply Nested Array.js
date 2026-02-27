/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */

var flat = function (arr, n) {
  let answer = [];

  function GenerateDataWithDepth(data, depth) {
    if (depth > n) {
      answer.push(data);
      return;
    }
    for (let i = 0; i < data.length; i++) {
      if (typeof data[i] === "object") {
        GenerateDataWithDepth(data[i], depth + 1);
      } else {
        answer.push(data[i]);
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object") {
      GenerateDataWithDepth(arr[i], 1);
    } else {
      answer.push(arr[i]);
    }
  }

  return answer;
};
