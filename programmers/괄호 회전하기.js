function bracketcheck(s) {
  let arr = [];
  let strings = s.split("");
  let open_bracket = ["(", "{", "["];
  let close_bracket = [")", "}", "]"];
  if (
    close_bracket.includes(strings[0]) === true ||
    open_bracket.includes(strings[strings.length - 1])
  ) {
    return false;
  }
  strings.forEach((v) => {
    if (open_bracket.includes(v) === true) {
      arr.push(open_bracket.indexOf(v));
    } else {
      if (arr.length > 0 && arr[arr.length - 1] === close_bracket.indexOf(v)) {
        arr.pop();
      } else {
        arr.push(close_bracket.indexOf(v));
      }
    }
  });

  if (arr.length === 0) return true;
  else return false;
}

function solution(s) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    let char = s[0];
    s = s.concat(char).slice(1, s.length + 1);
    if (bracketcheck(s) === true) {
      answer++;
    }
  }

  return answer;
}

console.log(solution("[](){}"));
