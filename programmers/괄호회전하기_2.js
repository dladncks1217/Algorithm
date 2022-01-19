// https://programmers.co.kr/learn/courses/30/lessons/76502
function check(s) {
  let stack = [];
  let open = ["{", "[", "("];
  let close = ["}", "]", ")"];
  // 들어온거 맨처음게 닫는문자열이면 틀리니 false
  if (close.includes(s[0]) === true || open.includes(s[s.length - 1])) {
    return false;
  } else {
    // 한 문자씩 돌아가며 확인
    s.forEach((v) => {
      // 짝에 맞는 문자들을 숫자로 바꿔 같은 숫자면 스택에서 빼버리도록 ex) [0,1]상황에서 1들어오면 1 pop
      if (open.includes(v) === true) {
        stack.push(open.indexOf(v));
      } else {
        if (stack.length > 0 && stack[stack.length - 1] === close.indexOf(v)) {
          stack.pop();
        } else {
          stack.push(v);
        }
      }
    });
  }
  // 스택에 남아있는게 없으면 올바른 괄호
  return stack.length === 0 ? true : false;
}
function solution(s) {
  let answer = 0;
  s = s.split(""); // 문제풀기 좋게 문자열 배열형태로 수정.
  for (let i = 0; i < s.length; i++) {
    // 모든 문자열 돌려보기
    if (check(s) === true) answer++;
    s.push(s.shift()); // 괄호 문자열들 왼쪽으로 회전시키기
  }
  return answer;
}

console.log(solution("[](){}"));
