function solution(fees, records) {
  let answer = [];
  // 시간 다 분으로 쪼개놓기 및 records 가공
  records = records.map((v) => {
    let check = v.split(" ");
    let hour = check[0].split(":");
    hour = parseInt(hour[0] * 60) + parseInt(hour[1]);
    check[0] = hour;
    return check;
  });

  let cars = new Map();
  records.forEach((v) => {
    if (!cars.has(v[1])) {
      cars.set(v[1], {
        name: v[1],
        time: v[0],
        inout: v[2], // in, out 여부
        fee: 0, // 총 돈
        resultTime: 0,
      });
    } else if (cars.has(v[1])) {
      if (cars.get(v[1]).inout === "IN") {
        let existFee = cars.get(v[1]).fee;
        let firstTime = cars.get(v[1]).time;
        let nowTime = v[0];

        let existTime = cars.get(v[1]).resultTime;

        let resultFee =
          nowTime - firstTime < fees[0]
            ? fees[1]
            : Math.ceil((nowTime - firstTime - fees[0]) / fees[2]) * fees[3];

        cars.set(v[1], {
          name: v[1],
          time: v[0],
          inout: v[2],
          fee: parseInt(resultFee) + parseInt(existFee),
          resultTime: existTime + nowTime - firstTime,
        });
      } else {
        //한번 나간 상황
        let existFee = cars.get(v[1]).fee;
        let existTime = cars.get(v[1]).resultTime;
        cars.set(v[1], {
          name: v[1],
          time: v[0],
          inout: v[2],
          fee: parseInt(existFee),
          resultTime: existTime,
        });
      }
    }
  });
  cars.forEach((v) => {
    if (v.inout === "IN") {
      let existFee = v.fee;
      let existTime = v.time;

      let resultTime = v.resultTime + 1440 - existTime;

      let resultFee =
        resultTime < fees[0]
          ? fees[1]
          : Math.ceil(resultTime / fees[2]) * fees[3];

      cars.set(v.name, {
        name: v.name,
        time: 1440,
        inout: "OUT",
        fee: existFee + resultFee,
        resultTime,
      });
    }
  });
  console.log(cars);
  return answer;
}

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      "05:34 5961 IN",
      "06:00 0000 IN",
      "06:34 0000 OUT",
      "07:59 5961 OUT",
      "07:59 0148 IN",
      "18:59 0000 IN",
      "19:09 0148 OUT",
      "22:59 5961 IN",
      "23:00 5961 OUT",
    ]
  )
);
