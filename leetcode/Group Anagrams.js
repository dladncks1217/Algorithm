/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const answer = [];
  const map = new Map();

  const reArrangedStrs = strs.map((data) => {
    const strKey = data.split("").sort();

    return [strKey.join(""), data];
  });

  reArrangedStrs.forEach((data) => {
    const [key, value] = data;
    if (map.has(key)) {
      const beforeData = map.get(key);
      map.set(key, [...beforeData, value]);
    } else {
      map.set(key, [value]);
    }
  });

  map.entries().forEach((data) => {
    answer.push(data[1]);
  });

  return answer;
};
