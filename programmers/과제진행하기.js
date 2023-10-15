function solution(plans) {
  const answer = [];
  plans = plans.map((data) => {
    data[2] = Number(data[2]);
    const time = data[1].split(":");
    time[0] = Number(time[0]) * 60;
    data[1] = time[0] + Number(time[1]);

    return [data[0], data[1] + data[2]];
  });

  plans.sort((a, b) => a[1] - b[1]);
  console.log(plans);
  return answer;
}

console.log(
  solution([
    ["korean", "11:40", "30"],
    ["english", "12:10", "20"],
    ["math", "12:30", "40"],
  ])
);
console.log(
  solution([
    ["science", "12:40", "50"],
    ["music", "12:20", "40"],
    ["history", "14:00", "30"],
    ["computer", "12:30", "100"],
  ])
);
