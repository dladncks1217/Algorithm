function solution(citations) {
    let answer = citations;
    answer.sort((a,b)=>b-a);
    for(let i = 0;i<answer.length;i++){
        if(i>=answer[i]) return i;
    }
    
    return answer.length;
}