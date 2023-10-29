const percent = [];
function GetAllSales(nowLevel, length, percentages) {
  if (nowLevel === length) {
    return percent.push([...percentages]);
  } else {
    for (let i = 1; i <= 4; i++) {
      const newArr = [...percentages];
      newArr.push(i * 10);
      GetAllSales(nowLevel + 1, length, newArr);
      newArr.pop();
    }
  }
}

function solution(users, emoticons) {
  let answer = [];
  const percentages = [10, 20, 30, 40];

  GetAllSales(0, emoticons.length, []);

  percent.forEach((sales) => {
    const saledEmoticons = emoticons.map((item, index) =>
      Math.floor(item * ((100 - sales[index]) * 0.01))
    );

    const userResult = [0, 0];
    users.forEach((user) => {
      let resultMoney = 0;

      const [mustBuy, money] = user;

      saledEmoticons.forEach((item, index) => {
        if (sales[index] >= mustBuy) resultMoney += item;
      });
      if (resultMoney >= money) userResult[0]++;
      else userResult[1] += resultMoney;
    });
    answer.push(userResult);
  });

  answer = answer.sort((a, b) => {
    if (a[0] === b[0]) return b[1] - a[1];
    return b[0] - a[0];
  });

  return answer[0];
}

console.log(
  solution(
    [
      [40, 10000],
      [25, 10000],
    ],
    [7000, 9000]
  )
);
