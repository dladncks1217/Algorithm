var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split("\n");
var cases = input[0];
var answer = "";

for (var i = 1; i <= cases; i++) {
  var splited = input[i].split(" ");
  for (var j in splited) {
    answer = answer + splited[j].split("").reverse().join("") + " ";
  }
  answer += "\n";
}

console.log(answer);
