function solution(word) {
  word = word.split("");
  const answer = [0, 0];
  const keyboard = [
    ["가", "호", "저", "론", "남", "드", "부", "이", "프", "설"],
    ["알", "크", "청", "울", "키", "초", "트", "을", "배", "주"],
    ["개", "캠", "산", "대", "단", "지", "역", "구", "너", "양"],
    ["라", "로", "권", "교", "마", "쿼", "파", "송", "차", "타"],
    ["코", "불", "레", "뉴", " ", "서", "한", "산", "리", "개"],
    ["터", "강", "봄", "토", "캠", "상", "호", "론", "운", "삼"],
    ["보", "람", "이", "경", "아", "두", "프", "바", "트", "정"],
    ["스", "웨", "어", "쿼", "일", "소", "라", "가", "나", "도"],
    ["판", "자", "비", "우", "사", "거", "왕", "태", "요", "품"],
    ["안", "배", "차", "캐", "민", "광", "재", "봇", "북", "하"],
  ];
  const queue = [];

  word.forEach((v) => {
    // 단어들 위치 집어넣기
    const check = [];
    for (let i = 0; i < keyboard.length; i++) {
      for (let k = 0; k < keyboard[i].length; k++) {
        if (v === keyboard[i][k]) {
          check.push([k, i]);
        }
      }
    }
    queue.push(check);
  });
  console.log(queue);
  let state = queue[0].shift();
  let skip = true;
  while (queue.length) {
    let checkWord = queue.shift(); // 확인할 글자 거리들
    if (!checkWord.length && skip !== true) {
      // 없는글자면 20추가
      answer[0] += 20;
      console.log("없는단어");
      let check = queue[0].slice();

      if (check.length) {
        state = check[0].slice();
      }
    } else {
      skip = false;
      let shortest = Infinity;
      let shortstate = [];
      let isRun = false; // n번째 도는건지
      while (checkWord.length) {
        // 들어왔던 값들 돌기

        if (checkWord.length === 1 && isRun === false) {
          // 좌표가 하나만있으면
          let checkState = checkWord.shift();

          let result =
            Math.abs(checkState[0] - state[0]) +
            Math.abs(checkState[1] - state[1]);

          answer[0] += result; // answer값 올려주기
          answer[1] += 1; // answer값 올려주기
          state = checkState.slice(); // 좌표 옮기기
          console.log(result);
          break;
        }

        isRun = true;
        let checkState = checkWord.shift();
        let resultCheck =
          Math.abs(checkState[0] - state[0]) +
          Math.abs(checkState[1] - state[1]);
        if (shortest > resultCheck) {
          // 거리가 다르다면
          shortest = resultCheck;
          shortstate = checkState.slice();
        } else if (shortest === resultCheck) {
          // 거리가 같다면
          resultCheck =
            Math.abs(checkState[0] - 0) + Math.abs(checkState[1] - 0);
          shortest = Math.abs(shortstate[0] - 0) + Math.abs(shortstate[1] - 0);
          if (shortest > resultCheck) {
            shortest = resultCheck;
            shortstate = checkState.slice();
          }
        }
      }
      if (isRun === true) {
        state = shortstate.slice();
        console.log(shortest);
        answer[0] += shortest;
        answer[1] += 1;
      }
    }
  }

  return answer;
}

console.log(solution("부스트캠프"));
