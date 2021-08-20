function solution(s){
    let answer = s;
    let arr = s.split('');
    let set = [];
    arr.forEach((v)=>{
        if(set.hasOwnProperty(v)===false)set.push(v);
    })
    for(let i = 0;i<arr.length;i++){
        let first=answer;
        answer = answer.split(set[i]+set[i]).join('');
        if(answer!==first){
            let i = -1;
            first = answer;
        }
    }
    if(answer.length===0) return 1;
    else return 0;
}

console.log(solution('baabaa'));