const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

input.shift();

let answer = 0;

input.forEach((item, indexY) => {
  const NumberLine = item.split("").map(Number);
  NumberLine.forEach((vertex, indexX) => {
    const nextVertex = NumberLine.slice(indexX + 1).indexOf(vertex);

    if (nextVertex !== -1) {
      const nextVertexIndex = nextVertex + indexX + 1;
      const Line = nextVertexIndex - indexX;

      if (
        Line + indexY < input.length &&
        Number(input[indexY + Line][indexX]) === vertex &&
        Number(input[indexY + Line][nextVertexIndex]) === vertex
      ) {
        answer = Math.max((Line + 1) ** 2, answer);
      }
    }
  });
});

answer === 0 ? console.log(1) : console.log(answer);
