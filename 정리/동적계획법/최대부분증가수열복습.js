function solution(arr) {
  let dy = Array.from({ length: arr.length }, () => 0);

  dy[0] = 1;
  for (let i = 0; i < arr.length; i++) {
    let max = 0; // dy 현재 인덱스에서 할수있는 가장 큰 값이 될 예정
    for (let k = i; k > 0; k--) {
      // 현재 수를 기준으로 하나씩 내려가면서 될수있는 제일 큰 개수
      if (arr[i] > arr[k] && dy[k] > max) max = dy[k];
    }
    dy[i] = max + 1; // 정해진 개수 + 1
  }
  console.log(dy);
  return Math.max(...dy);
}

console.log(solution([5, 3, 7, 8, 6, 2, 9, 4]));
