const prompt = require('prompt');
let me_x,me_y,rect_x,rect_y;
let result1,result2,result3,result4;

prompt.start();
prompt.get(['me_x','me_y','rect_x','rect_y'],(err,result)=>{
    console.log('값을 입력받았습니다.');
    

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
});