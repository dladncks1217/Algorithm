/**
 * @param {string} s
 * @return {string}
 */
let sortSentence = function (s) {
  let answer;
  s = s.split(" ");
  s.sort((a, b) => {
    return a[a.length - 1] - b[b.length - 1];
  });
  s = s.map((v) => {
    v = v.split("");
    v.pop();
    let result = v.join("");
    return result;
  });
  answer = s.join(" ");

  return answer;
};

console.log(sortSentence("is2 sentence4 This1 a3"));
