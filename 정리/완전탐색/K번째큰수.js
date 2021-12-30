function solution(n, k, card) {
  let answer = [];
  let set = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) continue;
      for (let k = 0; k < n; k++) {
        if (k === i || k === j) continue;
        set.add(card[i] + card[j] + card[k]);
      }
    }
  }
  answer = Array.from(set).sort((a, b) => b - a);
  console.log(answer);
  //   set.forEach((v) => {
  //     answer.push(v);
  //   });
  //   answer.sort((a, b) => b - a);
  return answer[k - 1];
}

let arr = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));
