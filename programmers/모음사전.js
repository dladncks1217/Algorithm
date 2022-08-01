function solution(word) {
  let answer = 0;
  let alphabet = ["A", "E", "I", "O", "U"];
  let isFinished = false;

  function DFS(str) {
    if (str === word) {
      isFinished = true;
      return answer;
    } else {
      if (!isFinished && str.length < 5) {
        for (let i = 0; i < 5; i++) {
          answer++;

          str += alphabet[i];
          //   console.log(str);
          DFS(str);
          if (isFinished) return;
          str = str.split("");
          str.pop();
          str = str.join("");
        }
      }
    }
  }

  DFS("", 0);

  return answer;
}

console.log(solution("AAAE"));
