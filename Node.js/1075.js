var fs = require('fs');
var input = fs.readFileSync("/dev/stdin").toString().split(' ');

var N = input[0];//1000
var F = input[1];//3

for(;N%F!=0;){
    if(N%F==0){
        toString(N);
        console.log(N.substring(2,4));
        break;
    }
    N++;
}
