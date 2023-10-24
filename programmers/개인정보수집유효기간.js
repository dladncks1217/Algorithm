function solution(now, terms, privacies) {
  const termDatas = {};
  terms.forEach((term) => {
    const [type, month] = term.split(" ");
    termDatas[type] = Number(month);
  });

  now = now.split(".").reduce((result, item, index) => {
    if (index === 0) return result + Number(item) * 28 * 12;
    if (index === 1) return result + Number(item) * 28;
    return result + Number(item);
  }, 0);

  const answer = privacies.map((data, index) => {
    let [date, term] = data.split(" ");
    const termMonth = termDatas[term];

    date = date.split(".").reduce((result, item, index) => {
      if (index === 0) return result + Number(item) * 28 * 12;
      if (index === 1) return result + Number(item) * 28;
      return result + Number(item);
    }, 0);

    date += termMonth * 28;

    return date > now ? 0 : index + 1;
  });

  return answer.filter((data) => data !== 0);
}

console.log(
  solution(
    "2022.05.19",
    ["A 6", "B 12", "C 3"],
    ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
  )
);

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
