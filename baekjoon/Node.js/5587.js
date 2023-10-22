const [N, ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let Sanggun = [];
let Gunsang = [];

for (let i = 1; i <= 2 * N; i++) {
  if (input.includes(i)) Sanggun.push(i);
  else Gunsang.push(i);
}

let turn = 1;
let nowCard = Sanggun.shift();

while (Sanggun.length > 0 && Gunsang.length > 0) {
  if (turn % 2 === 0) {
    const biggerCardIndex = Sanggun.findIndex((card) => card > nowCard);

    if (biggerCardIndex > -1) {
      nowCard = Sanggun[biggerCardIndex];
      Sanggun = Sanggun.filter((data) => data !== nowCard);
    } else {
      nowCard = 0;
    }
  } else {
    const biggerCardIndex = Gunsang.findIndex((card) => card > nowCard);
    if (biggerCardIndex > -1) {
      nowCard = Gunsang[biggerCardIndex];
      Gunsang = Gunsang.filter((data) => data !== nowCard);
    } else {
      nowCard = 0;
    }
  }

  //   console.log(Sanggun, Gunsang, nowCard);

  turn++;
}

console.log(Gunsang.length);
console.log(Sanggun.length);
