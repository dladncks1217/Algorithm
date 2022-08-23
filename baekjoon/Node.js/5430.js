const [[T], ...input] = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length; i += 3) {
  let func = input[i].split("");
  let arr = JSON.parse(input[i + 2]);
  let errorCheck = false;
  let reverseCheck = false;

  for (let k = 0; k < func.length; k++) {
    if (func[k] === "R") reverseCheck = !reverseCheck;
    else if (func[k] === "D") {
      if (arr.length > 0) {
        if (reverseCheck) arr.pop();
        else arr.shift();
      } else {
        errorCheck = !errorCheck;
        break;
      }
    }
  }
  if (errorCheck) console.log("error");
  else {
    if (reverseCheck) console.log(JSON.stringify(arr.reverse()));
    else console.log(JSON.stringify(arr));
  }
}
