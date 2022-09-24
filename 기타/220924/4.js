function solution(numbers) {
  let answer = [];
  numbers = numbers.map((v) => {
    v = v.toString(2).split("").map(Number);
    return v;
  });

  // 각 숫자들 확인
  numbers.forEach((v) => {
    // console.log(v);
    let isCorrect = true;

    function middleCheck(arr, middle, start, end, prev) {
      //   console.log(start, middle, end, v);
      if (arr[middle] === 1) {
        let left = middle - 1;
        let right = middle + 1;
        if (
          start === middle - 1 ||
          end === middle - 1 ||
          end === middle ||
          start === middle
        )
          return;
        let middleleft;
        arr.length % 2 === 0
          ? (middleleft = Math.floor(left / 2) + 1)
          : (middleleft = Math.floor(left / 2));

        middleCheck(arr, middleleft, start, left, middle);
        let middleright;
        arr.length % 2 === 0
          ? (middleright = Math.floor((middle + arr.length - 1) / 2) + 1)
          : (middleright = Math.floor((middle + arr.length - 1) / 2));
        middleCheck(arr, middleright, right, end, prev);
      } else {
        // 시작점이면
        if (start === 0 && end === arr.length - 1) {
          for (let i = 0; i < arr.length; i++) {
            if (i === middle) continue;
            if (arr[i] === 1) {
              isCorrect = false;
              break;
            }
          }
        } else {
          for (let i = start; i < end; i++) {
            if (i === middle) continue;
            if (arr[i] === 1) {
              isCorrect = false;
              break;
            }
          }
        }
      }
    }

    let middle;
    v.length % 2 === 0
      ? (middle = Math.floor((v.length - 1) / 2) + 1)
      : (middle = Math.floor((v.length - 1) / 2));

    middleCheck(v, middle, 0, v.length - 1, 0);
    if (isCorrect) {
      answer.push(1);
    } else answer.push(0);
  });

  return answer;
}

console.log(solution([7, 5]));
