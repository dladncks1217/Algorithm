var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');
var n = parseInt(input[0]);
var a = 0;
var b = 1;
var d;
if(n>=2){
    console.error(err);
}
for(var trys = 1;n<=trys;trys++){    
d = a + b;
a = b + d;
b = d + a;
}