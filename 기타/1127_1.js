// 선입선출
function FIFO(record) {
  let purchase = [];
  let sum = 0;
  record = record.map((v) => {
    let check = v.split(" ");
    return {
      P_OR_S: check[0],
      price: Number(check[1]),
      amount: Number(check[2]),
    };
  });
  record.forEach((v) => {
    // 구매하는경우
    if (v.P_OR_S === "P") {
      purchase.push(v);
      // 파는경우
    } else {
      let sellamount = v.amount;

      while (sellamount !== 0) {
        if (purchase[0].amount === 0) {
          purchase.shift();
          continue;
        }
        sum += purchase[0].price;
        purchase[0].amount--;
        sellamount--;
      }
    }
  });
  return sum;
}

// 선입후출
function FILO(record) {
  let purchase = [];
  let sum = 0;
  record = record.map((v) => {
    let check = v.split(" ");
    return {
      P_OR_S: check[0],
      price: Number(check[1]),
      amount: Number(check[2]),
    };
  });
  record.forEach((v) => {
    // 구매하는경우
    if (v.P_OR_S === "P") {
      purchase.push(v);
      // 파는경우
    } else {
      let sellamount = v.amount;

      while (sellamount !== 0) {
        if (purchase[purchase.length - 1].amount === 0) {
          purchase.pop();
          continue;
        }
        sum += purchase[purchase.length - 1].price;
        purchase[purchase.length - 1].amount--;
        sellamount--;
      }
    }
  });
  return sum;
}
function solution(record) {
  return [FIFO(record), FILO(record)];
}

console.log(
  solution(["P 100 4", "P 300 9", "S 1000 7", "P 1000 8", "S 700 7", "S 700 3"])
);
