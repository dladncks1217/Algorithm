function solution(name) {
  let answer = 0;
  let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = Array.from({ length: name.length }, () => "A");
  result = result.join("");
  let location = 0; // 현재 무슨알파벳인지
  let alphalocation = 0; // 현재 알파벳위치

  while (name !== result) {
    let distance = 26;

    for (let i = 0; i < name.length; i++) {
      if (name[i] === result[i]) continue;

      let index = alphabets.indexOf(name[i]); // 나온알파벳 뭔지

      if (Math.abs(index - location) > 13) {
        let distcheck = distance; // 값 바뀌었는지 확인용
        let alphacheck = alphalocation;
        if (name.length / 2 > Math.abs(alphacheck - i)) {
          alphacheck = name.length - i + alphacheck;
        }
        distance = Math.min(26 - index + location + alphacheck, distance); // 더 작은값으로 값이 바뀐 상황이라면
        if (distance !== distcheck) {
          alphalocation = i;
        }
      } else {
        let distcheck = distance; // 값 바뀌었는지 확인용
        let alphacheck = alphalocation;
        if (name.length / 2 > Math.abs(alphacheck - i)) {
          alphacheck = name.length - i + alphacheck;
        }
        distance = Math.min(distance, index - location + alphacheck);
        if (distance !== distcheck) {
          alphalocation = i;
        }
      }
    }
    answer += distance;
    result = result.split("");
    result[alphalocation] = name[alphalocation];
    result = result.join("");
    console.log(result);
  }

  return answer;
}

console.log(solution("JAN"));
