function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[idx] > arr[j]) idx = j;
    }
    [arr[idx], arr[i]] = [arr[i], arr[idx]];
  }
  return arr;
}

console.log(solution([13, 5, 11, 7, 23, 15]));
