function solution(num) {
    let answer = num;
    for(let i = 0;i<500;i++){
        if(num===1) return i;
        if(num%2===0){
            num=num/2;
        }else{
            num = num*3+1
        }
    }
    return -1;
}