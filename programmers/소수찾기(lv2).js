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
    let answer = [];
    let count = 0;
    for(let i = 1;i<=numbers.length;i++){
        permuation.push(...getPermuation(numarr,i));
    }
    for(let i = 0;i<permuation.length;i++){
        permuation[i]=Number(permuation[i].join(''));
    }
    permuation = permuation.filter((v,i)=>{
        return permuation.indexOf(v) === i;
    })
    permuation.sort();
    for(let i = 0;i<=permuation[permuation.length-1];i++) answer.push(true);
    answer.splice(0,2,false,false);
    for(let i = 2;i<=permuation[permuation.length-1];i++){
        if(answer[i]){
            for(let k = i*i;k<=permuation[permuation.length-1];k+=i){
                answer[k] = false;
            }
        }
    }
    permuation.forEach((v)=>{
        if(answer[v]) count++;
    })
    return count;
}
console.log(solution("011"));