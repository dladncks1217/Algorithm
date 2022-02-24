// https://programmers.co.kr/learn/courses/30/lessons/43163
// 하나만다른건지 확인용
function checkword(word1, word2) {
  word1 = word1.split("");
  word2 = word2.split("");
  let count = 0;
  word1.forEach((v, i) => {
    if (v !== word2[i]) {
      count++;
    }
  });
  //   console.log(word2);
  return count === 1 ? true : false; // 하나만다른거면 다른 문자의 인덱스
}

// 몇개나 다른건지 확인용
function diffCheck(word1, word2) {
  word1 = word1.split("");
  word2 = word2.split("");
  let count = 0;
  word1.forEach((v, i) => {
    if (v !== word2[i]) {
      count++;
    }
  });
  return count;
}

function solution(begin, target, words) {
  let answer = 100;
  let checked = Array.from({ length: words.length }, () => 0);
  let diff = diffCheck(begin, target);
  function DFS(L, word) {
    // 탐색이 끝났으면
    if (word === target) {
      console.log(L);
      return (answer = Math.min(answer, L));
    } else {
      for (let i = 0; i < words.length; i++) {
        if (checked[i] === 0) {
          if (checkword(word, words[i])) {
            let diffcheck = diffCheck(words[i], target);
            if (diffcheck <= diff) {
              diff = diffcheck;
              console.log(word, words[i]);
              checked[i] = 1;
              DFS(L + 1, words[i]);
              checked[i] = 0;
            }
          }
        }
      }
    }
  }

  DFS(0, begin);

  return answer === 100 ? 0 : answer;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
