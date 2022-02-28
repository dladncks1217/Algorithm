// https://programmers.co.kr/learn/courses/30/lessons/42888
function solution(record) {
  let answer = [];
  let user = {};
  record.forEach((v) => {
    v = v.split(" ");
    if (!user.hasOwnProperty(v[1])) {
      user[v[1]] = v[2];
    } else {
      if (v[2]) {
        user[v[1]] = v[2];
      }
    }
  });
  record.forEach((v) => {
    v = v.split(" ");
    if (v[0] === "Enter") {
      answer.push(`${user[v[1]]}님이 들어왔습니다.`);
    } else if (v[0] === "Leave") {
      answer.push(`${user[v[1]]}님이 나갔습니다.`);
    }
  });
  return answer;
}

console.log(
  solution([
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan",
  ])
);
