const [[len, maxlen], [...input]] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => {
    v = v.split(" ");
    return v;
  });

const length = +len;
const maxlength = +maxlen;
input.sort((a, b) => {
  return a < b ? -1 : 1;
});

function solution(str, length) {
  let answer = [];

  function DFS(mkstr, k) {
    if (mkstr.length === length) {
      let count = 0;
      for (let i = 0; i < length; i++) {
        if (
          mkstr[i] == "a" ||
          mkstr[i] == "e" ||
          mkstr[i] == "i" ||
          mkstr[i] == "o" ||
          mkstr[i] == "u"
        ) {
          count++;
        }
      }
      if (count > 0 && length - count > 1) {
        answer.push(mkstr);
      }
      return;
    } else {
      for (let i = k; i < maxlength; i++) {
        DFS(mkstr + str[i], i + 1);
      }
    }
  }

  DFS("", 0);

  return answer;
}

console.log(solution(input, length).join("\n"));
