function solution(n, recipes, orders) {
  let answer = 0;
  let hwagu = Array.from({ length: n }, () => []);
  orders = orders.map((v) => v.split(" "));
  let realRecipes = new Map();
  // 레시피들
  recipes.forEach((v) => {
    let temp = v.split(" ");
    realRecipes[temp[0]] = temp[1];
  });
  // 초기값
  hwagu.forEach((v) => {
    if (orders[0][1] === 0) {
      orders.shift();
    }
    let menu = orders[0][0]; // 메뉴확인
    for (let i = 0; i < realRecipes[menu]; i++) {
      v.push(0);
    }
    orders[0][1]--;
  });

  for (let i = 0; i < orders.length; i++) {
    let menu = orders[i][0]; // 메뉴
    let leftmenu = orders[i][1]; // 남은메뉴
    if (leftmenu <= 0) {
      continue;
    }
    let emptyhwagu = hwagucheck(hwagu); // 남은 화구
    // 남은 화구가 없다면

    if (emptyhwagu.length === 0) {
      let emptyNow = false;
      // 남은 음식조리시간 빼기
      while (emptyNow === false) {
        if (emptyhwagu.length !== 0) emptyNow = true;
        hwagu.forEach((v) => v.pop());
        answer++;
        emptyhwagu = hwagucheck(hwagu);
      }
      orders[i][1]--; // 음식하나빼기
    } else {
      //화구에0넣기
      emptyhwagu.forEach((v) => {
        let needtime = realRecipes[menu];
        for (let i = 0; i < needtime; i++) {
          hwagu[v].push(0);
        }
      });
      // 화구 조리시간 빼기
      hwagu.forEach((v) => {
        v.pop();
      });
      answer++;
    }
  }
  return answer;
}

function hwagucheck(arr) {
  let isEmpty = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 0) {
      isEmpty.push(i);
    }
  }
  return isEmpty;
}

console.log(solution(2, ["A 3", "B 2"], ["A 1", "A 2", "B 3", "B 4"]));
