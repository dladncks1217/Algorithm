function distCheck(alph, right, left) {
  //   let rdist = 0;
  //   let ldist = 0;
  let rhor = Math.abs(alph[1] - right[1]);
  let lhor = Math.abs(alph[1] - left[1]);
  let rdist = Math.abs(alph[0] - right[0]) + rhor;
  let ldist = Math.abs(alph[0] - left[0]) + lhor;
  //   console.log("rdist: ", rdist);
  //   console.log("ldist: ", ldist);
  if (rdist !== ldist) {
    return rdist < ldist ? "right" : "left";
  }
  if (rhor !== lhor) {
    return rhor < lhor ? "right" : "left";
  } else {
    return alph[1] > 4 ? "right" : "left";
  }
}
function solution(line) {
  let answer = [];
  line = line.split("");
  let keyboard = [
    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ];
  let target = [0, 0];
  let left = [1, 0];
  let right = [1, 9];

  line.forEach((v) => {
    for (let i = 0; i < keyboard.length; i++) {
      // 타겟 인덱스 확인
      if (keyboard[i].indexOf(v) !== -1) {
        target[0] = i;
        target[1] = keyboard[i].indexOf(v);
      }
    }
    // console.log(target, left, right, v);
    if (distCheck(target, right, left) === "right") {
      right = target.slice();
      answer.push(1);
    } else {
      left = target.slice();
      answer.push(0);
    }
  });

  return answer;
}

console.log(solution("RYI76"));
