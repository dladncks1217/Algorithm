const [length, ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");
let loop;

for (let i = 0; i < input.length; i++) {
  if (!isNaN(parseInt(input[i]))) {
    loop = parseInt(input[i]);
    continue;
  } else {
    // x번돌리기
    const answer = [];
    const set = { length: 0 };
    // {length:1, 0:'Fred', 'Fred':{self:0, parent:0} }
    const setLength = [];
    let finding; // 현재 확인중인 부모
    // 사람이름 처리
    for (let k = 1; k <= loop; k++) {
      let [name1, name2] = input[i].split(" ");

      if (!set.hasOwnProperty(name1)) {
        set[name1] = {};
        set[name1].self = set.length;
        set[name1].parent = set.length;
        set[set.length] = name1;
        set.length++;
        setLength.push(1);
      }

      if (!set.hasOwnProperty(name2)) {
        set[name2] = {};
        set[name2].self = set.length;
        set[name2].parent = set.length;
        set[set.length] = name2;
        set.length++;
        setLength.push(1);
      }

      // find 연산
      function finds(find) {
        if (set[find].self === set[find].parent) {
          return set[find].parent;
        } else {
          return (set[find].parent = finds(set[set[find].parent]));
        }
      }

      // union 연산
      function union(a, b) {
        let parentA = finds(a);
        let parentB = finds(b);

        if (parentB < parentA) {
          set[set[parentA]].parent = set[set[parentB]].self;
          setLength[parentB] += setLength[parentA];
          finding = set[set[parentB]].parent;
        } else if (parentA < parentB) {
          set[set[parentB]].parent = set[set[parentA]].self;
          setLength[parentA] += setLength[parentB];
          finding = set[set[parentA]].parent;
        } else {
          finding = set[set[parentA]].parent;
          return; // 이미 친구인 상태에서 또 친구하려하면 리턴
        }
      }

      union(name1, name2);

      answer.push(setLength[finding]);
      i++;
    }

    console.log(answer.join("\n"));
    i--;
  }
}
