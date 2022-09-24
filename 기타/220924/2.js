function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  const stack = [];

  let candelivery = cap;
  let canpickup = cap;

  let i = deliveries.length - 1;
  while (i > 0) {
    // 배달 가능하다면
    let j = i;
    while (true) {
      if (deliveries[j] <= candelivery) {
        candelivery -= deliveries[j];
        deliveries[j] = 0;
      } else break;
      j--;
    }
    // 픽업 가능하다면
    j = i;
    while (true) {
      if (pickups[j] <= canpickup) {
        canpickup -= pickups[j];
        pickups[j] = 0;
      } else break;
      j--;
    }
    answer += (i + 1) * 2;
    // console.log(deliveries, pickups, i);
    if (i === 2) break;
    // 복귀하고 다음집찾기
    for (let k = 0; k < deliveries.length; k++) {
      // 배달 끝
      if (deliveries[k] === 0 && pickups[k] === 0 && k === 0) {
        i = -1;
        break;
      }
      if (deliveries[k] === 0 && pickups[k] === 0) {
        i = k - 1;
        break;
      }
    }

    candelivery = cap;
    canpickup = cap;
  }

  return answer;
}

console.log(solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0]));
