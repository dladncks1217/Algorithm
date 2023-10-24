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

  for (let i = 0; i < plans.length - 1; i++) {
    const nextStartTime = plans[i + 1][1];
    const nowEndTime = plans[i][1] + plans[i][2];
    const unFinishedLeft =
      unFinished.length > 0 ? unFinished[unFinished.length - 1][1] : null;

    if (
      unFinishedLeft !== null &&
      unFinishedLeft <= nextStartTime - nowEndTime
    ) {
      answer.push(unFinished.pop()[0]);
    }
    if (nextStartTime - nowEndTime < 0) {
      const unFinishedJob = [
        plans[i][0],
        plans[i][1],
        nowEndTime - nextStartTime,
      ];
      unFinished.push(unFinishedJob);
    }
    if (nextStartTime - nowEndTime >= 0) {
      answer.push(plans[i][0]);
    }
  }

  answer.push(plans[plans.length - 1][0]);
  unFinished.reverse();

  unFinished.forEach((plan) => {
    answer.push(plan[0]);
  });

  return answer;
}

// console.log(
//   solution([
//     ["korean", "11:40", "30"],
//     ["english", "12:10", "20"],
//     ["math", "12:30", "40"],
//   ])
// );
// console.log(
//   solution([
//     ["science", "12:40", "50"],
//     ["music", "12:20", "40"],
//     ["history", "14:00", "30"],
//     ["computer", "12:30", "100"],
//   ])
// );

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
