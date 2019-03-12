const fs = require('fs');

let input = fs.readFileSync("dev/stdin").toString();
let variable = input.split(' ');

let wantlength = variable[0];
let originstick = 64;

let stick1, stick2, answerstick, garbagestick;

    stick1 = 32;
    stick2 = 32;

    for(let i = 0;wantlength==answerstick;i++){
        garbagestick = stick2/2; //16
        answerstick = garbagestick+stick1; //48
        if(answerstick => wantlength){
            stick1 = stick1/2;//16
            
        }
        

}