const readline = require('readline');
let me_x,me_y,rect_x,rect_y;
let result1,result2,result3,result4;
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.question('내 x좌표 입력',(x)=>{
    me_x = Number(x);
});
rl.question('내 y좌표 입력',(y)=>{
    me_y = Number(y);
});
rl.question('사각형 x좌표 입력',(x)=>{
    rect_x = Number(x);
});
rl.question('사각형 y좌표 입력',(y)=>{
    rect_y = Number(y);
});
    result1 = Number(result.me_x);
    result2 = Number(result.me_y);
    result3 = Number(result.rect_x)- result1;
    result4 = Number(result.rect_y)- result2;
    
    if((result1<=result2)&&(result1<=result3)&&(result1<=result4)){
        console.log(result1);
        return;
    }
    if((result2<=result1)&&(result2<=result3)&&(result2<=result4)){
        console.log(result2);
        return;
    }
    if((result3<=result1)&&(result3<=result2)&&(result3<=result4)){
        console.log(result3);
        return;
    }
    if((result4<=result1)&&(result4<=result2)&&(result4<=result3)){
        console.log(result4);
        return;
    } 