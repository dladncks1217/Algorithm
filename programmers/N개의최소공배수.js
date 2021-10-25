function getGreatest(a, b) {
  while (b > 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
function getLeast(a, b) {
  return (a * b) / getGreatest(a, b);
}
function solution(arr) {
  let answer = 1;
  arr.forEach((v) => {
    answer = getLeast(answer, v);
  });
  return answer;
}

console.log(solution([2, 6, 8, 14]));
