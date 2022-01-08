function solution(progresses, speeds) {
  let answer = [];
  while (progresses.length > 0) {
    let count = 0; // 모든 일이 끝나기 전까지 반복문을 돌려줍니다.
    while (progresses[0] >= 100) {
      count++; // 같은 날 동시에 끝나는 일들을 확인하기 위해 count로 지정해줍니다.
      progresses.shift(); // 끝난 업무는 큐(배열)에서 제거해줍니다.
      speeds.shift();
    }
    if (progresses[0] < 100) {
      progresses = progresses.map((v, i) => v + speeds[i]); // 일이 완료되지 않았을 경우 progresses를 최신화해줍니다.
    }
    count !== 0 ? answer.push(count) : ""; // 완료된 업무가 있을 경우에만 count++해줍니다.
  }
  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
