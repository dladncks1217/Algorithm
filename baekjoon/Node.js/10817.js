const fs = require('fs');
let input = fs.readFile('/dev/stdin').toSting().split(' ');
let a = parseInt(input[0]);
let b = parseInt(input[1]);
let c = parseInt(input[2]);
let array = new Array(a,b,c);
array.sort(array);