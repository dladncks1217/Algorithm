let hammingWeight = function (n) {
  let answer = 0;
  n = n.toString(2).split("");
  n.forEach((v) => {
    if (v === "1") answer++;
  });
  return answer;
};
