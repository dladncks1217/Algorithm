function solution(now, terms, privacies) {
  let answer = [];
  const term = {};

  now = now.split(".").map(Number);
  const today = now[0] * 12 * 28 + now[1] * 28 + now[2];

  // 텀 정리
  terms.forEach((v) => {
    v = v.split(" ");
    term[v[0]] = v[1];
  });

  // 날짜들 숫자화
  privacies = privacies.map((v) => {
    let result = 0;
    // 각 쪼개서 날짜 숫자화
    v = v.split(" ").join(".");
    v = v.split(".");
    const termcheck = v.pop();
    v = v.map(Number);

    let index = +term[termcheck];

    result = v[0] * 12 * 28 + v[1] * 28 + v[2] + index * 28;

    return result;
  });

  console.log(today);
  console.log(privacies);
  privacies.forEach((v, i) => {
    if (today >= v) {
      answer.push(i + 1);
    }
  });
  return answer;
}

console.log(
  solution(
    "2020.01.01",
    ["Z 3", "D 5"],
    [
      "2019.01.01 D",
      "2019.11.15 Z",
      "2019.08.02 D",
      "2019.07.01 D",
      "2018.12.28 Z",
    ]
  )
);
