let letterCombinations = function (digits) {
  let result = [];
  let temp = [];
  let letters = [
    [""],
    [""],
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"],
    ["j", "k", "l"],
    ["m", "n", "o"],
    ["p", "q", "r", "s"],
    ["t", "u", "v"],
    ["w", "x", "y", "z"],
  ];
  let maxLevel = digits.length;

  function DFS(L) {
    if (L === maxLevel) {
      let resultpush = temp.join("");
      resultpush !== "" ? result.push(resultpush) : "";
    } else {
      for (let i = 0; i < letters[digits[L]].length; i++) {
        temp.push(letters[digits[L]][i]);
        DFS(L + 1);
        temp.pop();
      }
    }
  }
  DFS(0);
  if (result.length === 1) return [];
  return result;
};

console.log(letterCombinations(""));
