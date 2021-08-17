function solution(s){
    let answer = s;
    let p=0;
    let y = 0;
    answer=answer.toLowerCase().split('');
    answer.forEach((v)=>{
        if(v==='p') p++;
        else if(v==='y') y++;
    })
    if(y===p) return true;
    else return false;
}