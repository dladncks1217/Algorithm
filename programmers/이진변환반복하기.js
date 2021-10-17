function solution(s) {
  let answer = [0, 0];
  let zerocnt = 0;
  while (s !== "1") {
    zerocnt = 0;
    if (s.indexOf("0") !== -1) {
      zerocnt = s.split("1").join("").length;
      s = s.split("0").join("");
      s = s.length.toString(2);
    } else {
      s = s.length.toString(2);
    }
    answer[0]++;
    answer[1] += zerocnt;
  }

  return answer;
}
console.log(solution("110010101001"));
