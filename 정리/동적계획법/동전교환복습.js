function solution(arr, money) {
  let answer = 0;
  let dy = Array.from({ length: money + 1 }, () => money * 2);
  dy[0] = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let k = arr[i]; k < dy.length; k++) {
      dy[k] = Math.min(dy[k], dy[k - arr[i]] + 1);
    }
  }

  return dy[dy.length - 1];
}

console.log(solution([1, 2, 5], 15));
