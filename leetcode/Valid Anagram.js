let isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let answer = true;
  let hash = {};
  s = s.split("");
  t = t.split("");
  s.forEach((v) => {
    if (hash.hasOwnProperty(v)) {
      hash[v] += 1;
    } else {
      hash[v] = 1;
    }
  });
  //   console.log(hash);
  t.forEach((v) => {
    if (hash.hasOwnProperty(v)) {
      if (hash[v] === 0) return (answer = false);
      hash[v] -= 1;
    } else {
      return (answer = false);
    }
  });
  //   console.log(hash);
  return answer;
};
console.log(isAnagram("rat", "car"));
    