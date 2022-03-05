function solution(purchases) {
  let answer = [0, 0, 0, 0, 0];
  let check = [];
  let purchase = [];
  let standard = [0, 10000, 20000, 50000, 100000, Number.MAX_SAFE_INTEGER];
  let monthdate = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // 배열가공
  purchases.forEach((v) => {
    v = v.split("/").join(" ");
    v = v.split(" "); // 문자열 쓰기좋기
    v.shift(); // 년도필요없음
    v = v.map((v) => parseInt(v));
    if (v[0] === 1) {
      check.push([v[1], v[2]]);
    } else {
      let dates = 0;
      for (let i = 0; i < v[0]; i++) {
        dates += monthdate[i];
      }
      dates += v[1];
      check.push([dates, v[2]]);
    }
  });

  let resultmoney = 0;
  // 1년순회
  for (let i = 1; i <= 365; i++) {
    // 산거 값들

    if (check.length) {
      while (check[0][0] === i) {
        let [date, money] = check.shift();
        purchase.push([0, money]); // 구매기록 저장
        resultmoney += money;
        if (check.length === 0) break;
      }
    }

    // 떨어뜨릴값

    if (purchase.length) {
      while (purchase[0][0] === 30) {
        let [date, money] = purchase.shift();
        resultmoney -= money;
        if (purchase.length === 0) break;
      }
    }

    // 날짜 추가
    if (purchase.length) {
      purchase = purchase.map((v) => {
        v[0] += 1;
        return v;
      });
    }
    console.log(resultmoney);
    if (resultmoney >= standard[1] && resultmoney < standard[2]) {
      answer[1]++;
    } else if (resultmoney >= standard[2] && resultmoney < standard[3]) {
      answer[2]++;
    } else if (resultmoney >= standard[3] && resultmoney < standard[4]) {
      answer[3]++;
    } else if (resultmoney >= standard[4] && resultmoney < standard[5]) {
      answer[4]++;
    } else {
      answer[0]++;
    }
  }
  return answer;
}

console.log(
  solution(["2019/01/01 5000", "2019/01/20 15000", "2019/02/09 90000"])
);
