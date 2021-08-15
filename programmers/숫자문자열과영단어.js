function solution(s) {
    let answer=s;
    let str=['zero','one','two','three','four','five','six','seven','eight','nine'];
    str.forEach((v,i)=>{
        answer = answer.split(v).join(i);
    })
    return Number(answer);
}

console.log(solution("one4seveneight"));