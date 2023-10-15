function solution(order) {
  let answer = 0;
  const Parcels = Array.from(
    { length: order.length },
    (_, index) => index + 1
  ).reverse();
  const storage = [];

  for (const item of order) {
    const startAnswer = answer;
    if (storage.length && storage[storage.length - 1] === item) {
      storage.pop();
      answer++;
      continue;
    }
    if (Parcels[Parcels.length - 1] === item) {
      answer++;
      Parcels.pop();
      continue;
    } else {
      while (Parcels.length && Parcels[Parcels.length - 1] !== item) {
        storage.push(Parcels.pop());
        if (Parcels[Parcels.length - 1] === item) {
          Parcels.pop();
          answer++;
          break;
        }
      }
    }
    if (startAnswer === answer) break;
  }

  return answer;
}

console.log(solution([4, 3, 1, 2, 5]));
console.log(solution([5, 4, 3, 2, 1]));
