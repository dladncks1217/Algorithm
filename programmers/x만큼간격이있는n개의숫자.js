function solution(x, n) {
    let answer = [x];
    let a = x;
    for(let i = 1;i<n;i++){
        a+=x;
        answer.push(a)
    }
    return answer;
}