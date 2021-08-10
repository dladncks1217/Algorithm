const prompt = require('prompt');
prompt.start();
prompt.get(['N'],(err,result)=>{
    N = result.N;
    for(var i = 1 ;i <= N;i++)
    {
        let z ='';
        for(let j = N;j > i; j-- ) z+=' ';
        for(let j = 1 ; j <=2*i-1 ; j++) z +='*';
        console.log(z);
    }
    for(let i = 2 ;i <= N;i++)
    {
        let z ='';
         for(let j = N-i+1;j < N; j++ ) z+=' ';
        for(let j = 2*(N-i)+1 ; j >=1 ; j--) z +='*';
        console.log(z);
    }
});