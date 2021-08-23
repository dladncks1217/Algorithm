function solution(n) {
    let answer = [];
    for(let i = 0;i<=n;i++) answer.push(true);
    answer.splice(0,2,false,false);
    for(let i = 2;i<=n;i++){
        if(answer[i]){
            for(let k = i*i;k<=n;k+=i){
                answer[k] = false;
            }
        }
    }
    answer = answer.filter((v)=>v===true)
    
    return answer.length;
}