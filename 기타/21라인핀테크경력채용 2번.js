// 부분집합 개수 구하는 함수
function resultCheck(arr) {
  let max = Math.max(...arr);
  let index = arr.indexOf(max);
  //   console.log(max - 1, arr.length - max);
  //   console.log("드간다" + arr);
  console.log("결과: ", index, arr.length - index - 1);
  return index * (arr.length - index - 1);
}
function solution(arr) {
  let answer = 0;
  let check = []; // a자배열 들어갈 배열
  let mountain = 0; // 올라가는지내려가는지 확인용도
  // 배열 탐색하며 a자모양 배열 탐색 걸러내기
  for (let i = 0; i < arr.length; i++) {
    console.log(check);
    if (i === 0 && arr[i] < arr[i + 1]) {
      check.push(arr[i]);
      console.log("초기단계주입" + check);
      mountain = 1;
      continue;
    }
    // 올라가는중
    if (i > 0 && arr[i] > arr[i - 1] && (mountain === 0 || mountain === 1)) {
      mountain = 1;
      check.push(arr[i]);
      console.log("올라가는상황" + check);
      continue;
    }
    // 내려가는중
    if (i > 0 && arr[i] < arr[i - 1] && (mountain === 1 || mountain === 2)) {
      //   console.log(check);
      mountain = 2;
      check.push(arr[i]);
      console.log("내려가는상황" + check);
      if (i === arr.length - 1) {
        answer += resultCheck(check.slice());
      }
      continue;
    }
    // 끝남
    if (arr[i] >= arr[i - 1] && mountain === 2) {
      console.log("끝나는상황" + check);
      answer += resultCheck(check.slice());
      check = [arr[i - 1]];
      i--;
      mountain = 0;
      continue;
    }
  }

  return answer;
}

console.log(solution([1, 2, 3, 2, 1, 4, 3, 2, 2, 1]));

// 제한사항 길이가 최대 100000이기에 무조건 O(N)이하로 풀어야했음
// 그 이상 탐색할 수 없었기에 A자형태배열을 검열하는방식으로 가장 꼭대기가 되는 부문을 기준으로 왼쪽과 오른쪽을 나눔
// 왼쪽 * 오른쪽이 배열 부분집합의 개수인 규칙을 이용하여 문제를 풀음
