function solution(phone_number) {
    let answer = phone_number.split('');
    let answer_1 = phone_number;
    answer.forEach((v,i)=>{
        if(phone_number.length-4>i){
            answer_1=answer_1.replace(v,'*');
        }  
    })
    return answer_1;
}