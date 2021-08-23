const getPermuation = (arr,number) =>{
    const result = [];
    if(number===1) return arr.map((v)=>[v]); 

    arr.forEach((v,i,o)=>{
        const fixer = v;
        const rest = o.filter((_,index)=> index !== i)
        const permuation = getPermuation(rest,number-1); 
        const resultarr = permuation.map((value)=>[fixer, ...value]) 
        result.push(...resultarr);
    });
    return result;
}
function solution(numbers) {
    let numarr = numbers.split('');
    let permuation = [];
    let answer = 0;
    for(let i = 1;i<=numbers.length;i++){
        permuation.push(...getPermuation(numarr,i));
    }
    for(let i = 0;i<permuation.length;i++){
        permuation[i]=Number(permuation[i].join(''));
    }
    permuation = permuation.filter((v,i)=>{
        return permuation.indexOf(v) === i;
    })
    for(let i = 0;i<permuation.length;i++){
        let num = permuation[i];
        if(num===2||num===3||num===5||num===7){
            answer++;
        }else if(num<2||num%2===0||num%3===0||num%5===0||num%7===0){
            continue;
        }else{
            answer++;
        }
    }

    return answer;
}
console.log(solution("011"));