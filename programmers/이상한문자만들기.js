function solution(s) {
    let answer = s.split('');
    let k = 0;
    for(let i = 0;i<s.length;i++){
        if(answer[i]===' '){
            k = 0;
            continue;
        }
        if(k%2===0){
            answer[i] = answer[i].toUpperCase();
        }else{
            answer[i] = answer[i].toLowerCase();
        }
        k++;
    }
    return answer.join('');
}