function solution(line) {
  let stack = [];
  line = line.split("");

  // 첫 값 넣기
  let index = 0;

  while (line.length > index) {
    stack.push(line[index]);
    let starCheck = false;
    index++;

    while (
      index < line.length &&
      stack.length >= 1 &&
      stack[stack.length - 1] === line[index]
    ) {
      starCheck = true;
      index++;
    }

    if (starCheck) stack.push("*");
    // console.log(stack);
  }

  return stack.join("");
}

console.log(solution("aabbbc"));
