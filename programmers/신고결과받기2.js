function solution(id_list, report, k) {
  const answer = id_list.map(() => 0);
  const userReports = new Set();
  const userReportsData = new Map();

  report.forEach((datas) => {
    userReports.add(datas);
  });

  id_list.forEach((item) => {
    userReportsData.set(item, 0);
  });

  userReports.forEach((users) => {
    const [_, reported] = users.split(" ");
    const existingData = userReportsData.get(reported);
    userReportsData.set(reported, existingData + 1);
  });

  userReports.forEach((users) => {
    const [user, reported] = users.split(" ");
    if (userReportsData.get(reported) >= k) {
      const getUserIndex = id_list.indexOf(user);
      answer[getUserIndex]++;
    }
  });

  return answer;
}

console.log(
  solution(
    ["muzi", "frodo", "apeach", "neo"],
    ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
    2
  )
);

console.log(
  solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3)
);
