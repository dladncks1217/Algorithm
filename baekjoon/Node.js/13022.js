let input = require("fs").readFileSync("./dev/stdin").toString().trim();

while (input.length > 0) {
  let wCount = 0;
  let isWolf = input.length >= 4 ? true : false;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === "w") wCount++;
    else if (wCount > 0 && input[i] !== "w") break;
    else {
      isWolf = false;
      break;
    }
  }

  if (!isWolf) break;

  const resultWord =
    "w".repeat(wCount) +
    "o".repeat(wCount) +
    "l".repeat(wCount) +
    "f".repeat(wCount);

  if (input.indexOf(resultWord) === 0) input = input.replace(resultWord, "");
  else break;
}

input.length === 0 ? console.log(1) : console.log(0);
