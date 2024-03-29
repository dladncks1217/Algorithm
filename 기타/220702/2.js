function solution(word, error) {
  const dx = [1, 0, -1, 0]; // dfs탐색에 이용할 배열. (x좌표)
  const dy = [0, -1, 0, 1]; // dfs탐색에 이용할 배열. (y좌표)

  error = parseInt(error, 16).toString(2).padStart(8, "0"); // 에러값 2진수변환
  let answer = [
    // 비트들 정리
    [
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      [16, 6],
      [16, 5],
      [16, 4],
      [16, 3],
      0,
      1,
      1,
      1,
      1,
      1,
      1,
      1,
    ],
    [
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      1,
      [16, 8],
      [16, 7],
      [16, 2],
      [16, 1],
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
    ],
    [
      1,
      0,
      1,
      1,
      1,
      0,
      1,
      0,
      0,
      [17, 2],
      [17, 1],
      [15, 8],
      [15, 7],
      0,
      1,
      0,
      1,
      1,
      1,
      0,
      1,
    ],
    [
      1,
      0,
      1,
      1,
      1,
      0,
      1,
      0,
      0,
      [17, 4],
      [17, 3],
      [15, 6],
      [15, 5],
      0,
      1,
      0,
      1,
      1,
      1,
      0,
      1,
    ],
    [
      1,
      0,
      1,
      1,
      1,
      0,
      1,
      0,
      1,
      [17, 6],
      [17, 5],
      [15, 4],
      [15, 3],
      0,
      1,
      0,
      1,
      1,
      1,
      0,
      1,
    ],
    [
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      1,
      [17, 8],
      [17, 7],
      [15, 2],
      [15, 1],
      0,
      1,
      0,
      0,
      0,
      0,
      0,
      1,
    ],
    [1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      [18, 2],
      [18, 1],
      [14, 8],
      [14, 7],
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
    ],
    [
      1,
      1,
      1,
      0,
      1,
      0,
      1,
      0,
      1,
      [18, 4],
      [18, 3],
      [14, 6],
      [14, 5],
      1,
      1,
      1,
      0,
      1,
      0,
      1,
      1,
    ],
    [
      [4, 2],
      [4, 1],
      [3, 8],
      [3, 7],
      [2, 2],
      [2, 1],
      0,
      [1, 8],
      [1, 7],
      [18, 6],
      [18, 5],
      [14, 4],
      [14, 3],
      [8, 6],
      [8, 5],
      [8, 4],
      [8, 3],
      [2, 6],
      [2, 5],
      [2, 4],
      [2, 3],
    ],
    [
      [4, 4],
      [4, 3],
      [3, 6],
      [3, 5],
      [2, 4],
      [2, 3],
      1,
      [1, 6],
      [1, 5],
      [18, 8],
      [18, 7],
      [14, 2],
      [14, 1],
      [8, 8],
      [8, 7],
      [8, 2],
      [8, 1],
      [2, 8],
      [2, 7],
      [2, 2],
      [2, 1],
    ],
    [
      [4, 6],
      [4, 5],
      [3, 4],
      [3, 3],
      [2, 6],
      [2, 5],
      0,
      [1, 4],
      [1, 3],
      [19, 2],
      [19, 1],
      [13, 8],
      [13, 7],
      [9, 2],
      [9, 1],
      [7, 8],
      [7, 7],
      [3, 2],
      [3, 1],
      [1, 8],
      [1, 7],
    ],
    [
      [4, 8],
      [4, 7],
      [3, 2],
      [3, 1],
      [2, 8],
      [2, 7],
      1,
      [1, 2],
      [1, 1],
      [19, 4],
      [19, 3],
      [13, 6],
      [13, 5],
      [9, 4],
      [9, 3],
      [7, 6],
      [7, 5],
      [3, 4],
      [3, 3],
      [1, 6],
      [1, 5],
    ],
    [
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      [19, 6],
      [19, 5],
      [13, 4],
      [13, 3],
      [9, 6],
      [9, 5],
      [7, 4],
      [7, 3],
      [3, 6],
      [3, 5],
      [1, 4],
      [1, 3],
    ],
    [
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      0,
      [19, 8],
      [19, 7],
      [13, 2],
      [13, 1],
      [9, 8],
      [9, 7],
      [7, 2],
      [7, 1],
      [3, 8],
      [3, 7],
      [1, 2],
      [1, 1],
    ],
    [
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      1,
      [20, 2],
      [20, 1],
      [12, 8],
      [12, 7],
      [10, 2],
      [10, 1],
      [6, 8],
      [6, 7],
      [4, 2],
      [4, 1],
      error[7],
      error[6],
    ],
    [
      1,
      0,
      1,
      1,
      1,
      0,
      1,
      0,
      0,
      [20, 4],
      [20, 3],
      [12, 6],
      [12, 5],
      [10, 4],
      [10, 3],
      [6, 6],
      [6, 5],
      [4, 4],
      [4, 3],
      error[5],
      error[4],
    ],
    [
      1,
      0,
      1,
      1,
      1,
      0,
      1,
      0,
      0,
      [20, 6],
      [20, 5],
      [12, 4],
      [12, 3],
      [10, 6],
      [10, 5],
      [6, 4],
      [6, 3],
      [4, 6],
      [4, 5],
      error[3],
      error[2],
    ],
    [
      1,
      0,
      1,
      1,
      1,
      0,
      1,
      0,
      1,
      [20, 8],
      [20, 7],
      [12, 2],
      [12, 1],
      [10, 8],
      [10, 7],
      [6, 2],
      [6, 1],
      [4, 8],
      [4, 7],
      error[1],
      error[0],
    ],
    [
      1,
      0,
      0,
      0,
      0,
      0,
      1,
      0,
      1,
      1,
      0,
      [11, 8],
      [11, 7],
      [11, 2],
      [11, 1],
      [5, 8],
      [5, 7],
      [5, 2],
      [5, 1],
      0,
      0,
    ],
    [
      1,
      1,
      1,
      1,
      1,
      1,
      1,
      0,
      1,
      0,
      1,
      [11, 6],
      [11, 5],
      [11, 4],
      [11, 3],
      [5, 6],
      [5, 5],
      [5, 4],
      [5, 3],
      1,
      1,
    ],
  ];
  let codes = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    " ",
    "$",
    "%",
    "*",
    "+",
    "-",
    ".",
    "/",
    ":",
  ];
  word = word.toUpperCase(); // 입력값 모두 대문자로.

  let data = [0];

  for (let i = 0; i < word.length; i++) {
    // 데이터들 2진수값으로 넣어주기.
    let index = codes.indexOf(word[i]);
    data.push(parseInt(index).toString(2).padStart(8, "0"));
  }

  for (let i = data.length; i < 20; i++) {
    // 데이터 비면 00000000넣어주기.
    data.push("00000000");
  }

  function DFS(number, x, y) {
    // dfs탐색을 하며 answer 값을 바꿔줄 함수.

    if (typeof answer[y][x] === "object" && answer[y][x][0] !== number) return; // 찾으려는값이 아니라면 리턴
    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [x + dx[i], y + dy[i]];
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < 21 &&
        ny < 21 &&
        typeof answer[ny][nx] === "object"
      ) {
        // 찾는게 object일 경우에만
        let index = answer[ny][nx].slice(); // 바꾸려는 값
        index = index[1] - 1;
        [(answer[ny][nx] = data[number][index])]; // 확인된 값 answer배열로 넣어주기
        DFS(number, nx, ny);
      }
    }
  }

  for (let y = 0; y < 21; y++) {
    // 탐색하다 값 들어가야하는거 나오면
    for (let x = 0; x < 21; x++) {
      if (typeof answer[y][x] === "object") {
        let search = answer[y][x].slice();
        search = search[0];
        DFS(search, x, y);
      }
    }
  }

  answer = answer.map((v) => v.join(""));

  return answer;
}
