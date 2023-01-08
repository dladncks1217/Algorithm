function solution(now, terms, privacies) {
  let answer = [];
  const term = {};

  now = now.split(".").map(Number);
  const today = now[0] * 12 * 28 + now[1] * 28 + now[2];

  terms.forEach((v) => {
    v = v.split(" ");
    term[v[0]] = v[1];
  });

  privacies = privacies.map((v) => {
    let result = 0;
    v = v.split(" ").join(".");
    v = v.split(".");
    const termcheck = v.pop();
    v = v.map(Number);

    let index = +term[termcheck];

    result = v[0] * 12 * 28 + v[1] * 28 + v[2] + index * 28;

    return result;
  });

  privacies.forEach((v, i) => {
    if (today >= v) {
      answer.push(i + 1);
    }
  });
  return answer;
}
