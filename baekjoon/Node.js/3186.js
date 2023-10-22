const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [stand, blank, N] = input[0].split(" ").map(Number);
let persons = input[1].slice();

let answer = [];

let nowFind = 1;
let useUrinal = 0;
let unUseUrinal = 0;

while (persons.length > 0) {
  //   console.log(persons);
  if (nowFind === 1) {
    const standStr = "1".repeat(stand);
    const newPersons = persons.indexOf(standStr);
    if (newPersons === -1) break;
    persons = persons.slice(newPersons + stand);
    useUrinal = newPersons + stand;
    // console.log(newPersons + stand);
    nowFind = 0;
  } else {
    const usedStr = "0".repeat(blank);
    const newPersons = persons.indexOf(usedStr);
    if (newPersons === -1) break;
    persons = persons.slice(newPersons + blank);

    // console.log(newPersons + blank);
    unUseUrinal = newPersons + blank;
    // console.log(newPersons, blank);

    answer.push(useUrinal + unUseUrinal);

    useUrinal = 0;
    unUseUrinal = 0;
    nowFind = 1;
  }
}

for (let i = 1; i < answer.length; i++) {
  answer[i] = answer[i] + answer[i - 1];
}

if (nowFind === 0) {
  answer.push(blank - unUseUrinal + N);
  //   const startEnd = persons.indexOf(0);

  //   if (startEnd === -1) answer.push(useUrinal + blank);
  //   else {
  //     const lastData = persons.indexOf("1");
  //     const lastPersons = answer.slice(lastData);
  //     // answer.push(useUrinal + blank - lastPersons.length);
  //   }
}

answer.length > 0 ? console.log(answer.join("\n")) : console.log("NIKAD");
