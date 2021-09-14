function solution(a, b) {
    let answer = 0;
    a.forEach((v,i)=>[
        answer+=(v*b[i])
    ])
    return answer;
}