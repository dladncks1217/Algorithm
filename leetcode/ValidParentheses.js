let isValid = function (s) {
  let answer = true;
  let stack = [];
  s = s.split("");
  let open = ["(", "[", "{"];
  let close = [")", "]", "}"];

  while (s.length > 0) {
    if (open.indexOf(s[0]) !== -1) {
      stack.push(s.shift());
    } else {
      // 아예 엇나갈경우
      if (stack.length === 0) {
        return false;
      }
      let opencase = open.indexOf(stack[stack.length - 1]);
      let closecase = close.indexOf(s[0]);
      if (opencase === closecase) {
        stack.pop();
        s.shift();
      } else {
        stack.push(s.shift());
      }
    }
  }
  if (stack.length > 0) answer = false;
  return answer;
};

console.log(isValid("()[]{}"));
