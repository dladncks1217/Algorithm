// https://leetcode.com/problems/word-search-ii
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
let findWords = function (board, words) {
  let answer = [];
  let answercheck = "";
  let dx = [1, 0, -1, 0];
  let dy = [0, -1, 0, 1];
  let searchstart = []; // 첫글자들 확인용
  let search = [];
  let findqueue = []; // 특정 단어로 시작하는것들 모음

  let check = Array.from(Array(board.length), () =>
    Array(board[0].length).fill(0)
  );

  function DFS(L, x, y, word, check) {
    if (L === word.length - 1) {
      //   console.log(L, word.length - 1);
      answercheck = word;
      return word;
    } else {
      for (let i = 0; i < 4; i++) {
        let nx = dx[i] + x;
        let ny = dy[i] + y;
        if (nx >= 0 && ny >= 0 && nx < board[0].length && ny < board.length) {
          //   console.log([y, x], [ny, nx]);
          //   console.log(board[ny][nx], word[L + 1]);
          if (board[ny][nx] === word[L + 1] && check[ny][nx] === 0) {
            check[ny][nx] = 1;
            DFS(L + 1, nx, ny, word, check);
            check[ny][nx] = 0;
          }
        }
      }
    }
  }

  // 시작점 다 더해버리기
  words.forEach((v) => {
    searchstart.push(v[0]);
  });
  console.log(searchstart);
  for (let i = 0; i < board.length; i++) {
    for (let k = 0; k < board[i].length; k++) {
      if (searchstart.indexOf(board[i][k]) !== -1) {
        search.push([board[i][k], k, i]); // 몇번째에 뭐로시작하는게 있는건지
      }
    }
  }

  console.log(search);

  search.forEach((v) => {
    const [start, x, y] = v;
    words.forEach((v) => {
      if (v[0] === start) findqueue.push([v, x, y]); // 특정 단어들 다 큐에 넣기
    });
  });
  //   console.log(findqueue);

  while (findqueue.length) {
    // console.log(findqueue[0], x, y);
    const [word, x, y] = findqueue.shift();
    check[y][x] = 1;
    DFS(0, x, y, word, check);
    check[y][x] = 0;

    if (answercheck === word) {
      if (answer.indexOf(word) === -1) {
        answer.push(word);
      }
    }
  }

  return answer;
};

console.log(
  findWords(
    [
      ["o", "a", "a", "n"],
      ["e", "t", "a", "e"],
      ["i", "h", "k", "r"],
      ["i", "f", "l", "v"],
    ],
    ["oath", "pea", "eat", "rain"]
    // ["eat"]
  )
);
