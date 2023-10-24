function solution(plans) {
  const answer = [];

  const unFinished = [];

  plans = plans.map((data) => {
    data[2] = Number(data[2]);
    const time = data[1].split(":");
    time[0] = Number(time[0]) * 60;
    data[1] = time[0] + Number(time[1]);

    return [data[0], data[1], data[2]];
  });

  plans.sort((a, b) => a[1] - b[1]);

  console.log(plans);

  for (let i = 0; i < plans.length; i++) {
    const nowName = plans[i][0];
    const nowEndTime = plans[i][1] + plans[i][2];

    // 새 과제 있을경우
    if (i < plans.length - 1) {
      const nextStartTime = plans[i + 1][1];

      // 남은거 중간에 끝내기 가능하다면
      if (
        unFinished.length > 0 &&
        nextStartTime - nowEndTime >= unFinished[unFinished.length - 1][2]
      ) {
        console.log(
          nowName,
          nextStartTime,
          nowEndTime,
          nextStartTime - nowEndTime
        );
        answer.push(unFinished.pop()[0]);
        // 하던게 없다면
      } else if (nextStartTime - nowEndTime > 0) {
        answer.push(nowName);
      } else {
        const newPlan = plans[i].slice();
        newPlan[2] = newPlan[2] - (nowEndTime - plans[i + 1][1]);
        unFinished.push(newPlan);
      }
      // 마지막 처리
    } else {
      answer.push(nowName);

      while (unFinished.length > 0) {
        answer.push(unFinished.pop()[0]);
      }
    }
  }

  return answer;
}

// console.log(
//   solution([
//     ["korean", "11:40", "30"],
//     ["english", "12:10", "20"],
//     ["math", "12:30", "40"],
//   ])
// );
console.log(
  solution([
    ["science", "12:40", "50"],
    ["music", "12:20", "40"],
    ["history", "14:00", "30"],
    ["computer", "12:30", "100"],
  ])
);

// console.log(
//   solution([
//     ["aaa", "12:00", "20"],
//     ["bbb", "12:10", "30"],
//     ["ccc", "12:40", "10"],
//   ])
// );

// console.log(
//   solution([
//     ["1", "00:00", "30"],
//     ["2", "00:10", "40"],
//     ["3", "00:20", "10"],
//     ["4", "00:25", "10"],
//     ["5", "01:10", "10"],
//   ])
// );
