function solution(x) {
    let answer = true;
    let a = x.toString().split('');
    let sum = 0;
    a.forEach((v)=>{
        sum+=Number(v)
    });
    return x%sum===0?true:false;
}