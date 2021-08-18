function solution(s){
    let answer = s;
    answer = s.split('');
    if(answer[0]===')'||answer[answer.length-1]==='(') return false;
    let arr = [];
    answer.forEach((v,i)=>{
        if(v==='(') arr.push(v);
        else arr.pop();
    })
    if(arr.length===0) return true;
    else return false;
}