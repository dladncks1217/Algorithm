function solution(numbers) {
    
    let answer = numbers.map((v)=>v.toString())
    .sort((a,b)=>{
        return (b+a)*1 - (a+b)*1;
    }).join('');
    
    answer = answer[0]==='0'?'0':answer;
    return answer;
}
