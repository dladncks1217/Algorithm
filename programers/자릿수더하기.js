function solution(n){
    let answer = [];
    for(let i = 0;i<n.toString().length;i++){
        answer.push((n.toString().substr(i,1))*1);
    }
    return answer.reduce((acc,v)=> {return acc+=v});
}
