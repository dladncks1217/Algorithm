function solution(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length - 1 - i; j++) {
      arr[i] - arr[j] > 0 ? ([arr[i], arr[j]] = [arr[j], arr[i]]) : "";
    }
  }

  return arr;
}

console.log(solution([13, 5, 11, 7, 23, 15]));
