const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("");

const hash = {
  B: "v",
  E: "ye",
  H: "n",
  P: "r",
  C: "s",
  Y: "u",
  X: "h",
};

const answer = input.map((item) => {
  const spell = item.toUpperCase();
  if (hash.hasOwnProperty(spell)) return hash[spell];
  return spell;
});

console.log(answer.join("").toLocaleLowerCase());
