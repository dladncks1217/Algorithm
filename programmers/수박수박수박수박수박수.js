function solution(n) {
    let answer = [];
    for(let i = 2;i<n+2;i++){
        if(i%2===0) answer.push('수');
        else answer.push('박');
    }
    return answer.join('');
}