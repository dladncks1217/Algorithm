function solution(new_id) {
    let answer=new_id;
    let arr;
    answer = answer.toLowerCase(); // 1단계
    arr = answer.split(''); // 2단계
    arr = arr.map((v,i)=>{
        if(answer.charCodeAt(i) <= 57&&answer.charCodeAt(i)>=48) return v;
        else if(answer.charCodeAt(i)>=97&&answer.charCodeAt(i)<=122||v==='.'||v==='-'||v==='_') return v;
        else return '';
    })
    answer = arr.join('');
    for(let i = 0; i <7;i++){
        answer = answer.split('..').join('.')// 3단계
    }
    while(true){// 4단계
        if(answer.charAt(0)!=='.'&&answer.charAt(answer.length-1)!=='.') break;
        else if(answer.charAt(0)==='.') answer = answer.slice(1);
        else if(answer.charAt(answer.length-1)==='.') answer = answer.slice(0,-1);
    }
    if(answer.length===0) answer = 'a'; // 5단계
    if(answer.length>15) { // 6단계
        answer=answer.slice(0,15);
        while(true){
            if(answer.charAt(answer.length-1)==='.') answer = answer.slice(0,-1);
            else break;
        }
    }
    if(answer.length===1) answer = `${answer}${answer}${answer}`; // 7단계
    else if(answer.length===2) answer = `${answer}${answer.charAt(1)}`;
    return answer;
}

console.log(solution("z-+.^."));