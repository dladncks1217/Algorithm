function solution(atmos) {
  let answer = 0;
  let fineDust = [30, 80, 150, 1000];
  let ufineDust = [15, 35, 75, 1000];
  let day = 0;
  let exist = false;

  atmos.forEach((v) => {
    // 마스크 써야된다면
    day++;
    if (v[0] > fineDust[2] && v[1] > ufineDust[2]) {
      console.log("개안좋아서 하루만씀");
      answer++;
      day = 0;

      exist = false;
    } else if (v[0] > fineDust[1] || v[1] > ufineDust[1]) {
      if (exist === false) {
        exist = true;
        console.log("들어옴");
        // answer++;
      }
    } else {
      if (exist === false) {
        day = 0;
        exist = false;
      }
    }
    console.log(answer, v, day);
    if (day >= 3) {
      if (exist === true) {
        console.log("벗음");
        day = 0;
        answer++;
        exist = false;
      } else {
        day = 0;
      }
    }
  });
  if (exist) answer++;
  return answer;
}

console.log(
  solution([
    [140, 90],
    [177, 75],
    [95, 45],
    [71, 31],
    [150, 30],
    [80, 35],
    [72, 33],
    [166, 81],
    [151, 75],
  ])
);
// if (check <= 2) {
//     if (check === 0) {
//       console.log("마스크쓴다");
//       answer++;
//     }
//     check++;
//   } else {
//     answer++;
//     check = 1;
//   }
