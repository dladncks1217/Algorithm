const [length, ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");
let loop;
for (let i = 0; i < input.length; i++) {
  if (!isNaN(parseInt(input[i]))) {
    // let num = parseInt(input[i]);
    loop = parseInt(input[i]);

    // i += num - 1;

    continue;
  } else {
    // x번돌리기
    const answer = [];
    const names = [];
    const set = [];
    const setLength = [];

    // 사람이름 처리
    for (let k = 1; k <= loop; k++) {
      let [name1, name2] = input[i].split(" ");

      if (names.indexOf(name1) === -1) {
        if (set.length > 0) {
          names.push(name1);
          set.push(set.length);
          setLength.push(1);
        } else {
          names.push(name1);
          set.push(0);
          setLength.push(1);
        }
      }
      if (names.indexOf(name2) === -1) {
        if (set.length > 0) {
          names.push(name2);
          set.push(set.length);
          setLength.push(1);
        } else {
          names.push(name2);
          set.push(0);
          setLength.push(1);
        }
      }

      // find 연산
      function finds(find) {
        if (set[find] === find) {
          return find;
        } else {
          return (set[find] = finds(set[find]));
        }
      }

      // union 연산
      function union(a, b) {
        let parentA = finds(a);
        let parentB = finds(b);

        if (parentA > parentB) {
          set[parentA] = parentB;
          setLength[parentB] += setLength[parentA];
        } else {
          set[parentB] = parentA;
          setLength[parentA] += setLength[parentB];
        }
      }

      union(names.indexOf(name1), names.indexOf(name2));
      answer.push(setLength[0]);
      i++;
    }

    console.log(answer.join("\n"));
    i--;
  }
}
