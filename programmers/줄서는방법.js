function solution(n, k) {
  let answer = [];
  let arr = Array.from({ length: n }, (_, idx) => idx + 1); // 시작값 1부터 배열로
  let cases = arr.reduce((v, i) => v * i, 1); // 총 만들 수 있는 경우의 수
  k--;

  while (answer.length !== n) {
    cases = cases / arr.length; // 특정 원소가 맨 앞에 있을 때 경우의 수
    let temp = arr[Math.floor(k / cases)]; // 못나오는 경우의 수 다 거르고 들어갈 앞자리 값.
    answer.push(temp); // 맨 앞자리 경우의 수
    k = k % cases; // 다음 들어갈 값.
    arr = arr.filter((e) => e !== temp); // 이미 들어간 값 거르기
  }
  return answer;
}
console.log(solution(3, 5));
