const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");

input.shift();

let myInks = 0;
let jumpCount = 0;
const inks = input.shift().split("");
const commands = input.pop().split("");

const map = input.map((data) => {
  return data.split("");
});

const myLocation = [0, 0];

for (let i = 0; i < map.length; i++) {
  for (let k = 0; k < map[0].length; k++) {
    if (map[i][k] === "@") {
      myLocation[0] = i;
      myLocation[1] = k;
      break;
    }
  }
}

function jumpWall(x, y, color, ink) {
  for (let i = 0; i < map.length; i++) {
    for (let k = 0; k < map[0].length; k++) {
      const X = Math.abs(x - k);
      const Y = Math.abs(y - i);
      if (X + Y <= ink && map[i][k] !== "." && map[i][k] !== "@") {
        map[i][k] = color;
      }
    }
  }
}

commands.forEach((command) => {
  const [y, x] = myLocation;
  if (command === "j") myInks++;
  if (
    command === "R" &&
    myLocation[1] + 1 < map[0].length &&
    map[y][x + 1] === "."
  ) {
    const [y, x] = myLocation;
    map[y][x] = ".";
    map[y][x + 1] = "@";
    myLocation[1]++;
  }
  if (command === "L" && myLocation[1] - 1 >= 0 && map[y][x + -1] === ".") {
    const [y, x] = myLocation;
    map[y][x] = ".";
    map[y][x - 1] = "@";
    myLocation[1]--;
  }
  if (command === "U" && myLocation[0] - 1 >= 0 && map[y - 1][x] === ".") {
    const [y, x] = myLocation;
    map[y][x] = ".";
    map[y - 1][x] = "@";
    myLocation[0]--;
  }
  if (
    command === "D" &&
    myLocation[0] + 1 < map.length &&
    map[y + 1][x] === "."
  ) {
    const [y, x] = myLocation;
    map[y][x] = ".";
    map[y + 1][x] = "@";
    myLocation[0]++;
  }
  if (command === "J") {
    const nowInk = inks[jumpCount % inks.length];

    jumpWall(myLocation[1], myLocation[0], nowInk, myInks);
    myInks = 0;
    jumpCount++;
  }
});

const result = map.join("\n");
console.log(result.replaceAll(",", ""));
