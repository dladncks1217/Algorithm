function solution(numbers) {
  let answer = numbers
    .map((v) => v.toString())
    .sort((a, b) => parseInt(b + a) - parseInt(a + b))
    .join("");
  return answer[0] === "0" ? "0" : answer;
}

console.log(solution([3, 30, 34, 5, 9]));
