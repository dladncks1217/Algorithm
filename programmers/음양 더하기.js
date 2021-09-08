function solution(absolutes, signs) {
    let answer = absolutes;
    let sum = 0;
    answer.forEach((v,i)=>{
        if(signs[i]===false){
            sum+=-v;
        }else sum+=v;
    })
    
    return sum;
}