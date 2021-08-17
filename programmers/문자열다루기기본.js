function solution(s) {
    if(s.split('').includes('e')) return false;
    if((s.length===4||s.lenght===6)&&!isNaN(Number(s))) return true;
    else return false;
}