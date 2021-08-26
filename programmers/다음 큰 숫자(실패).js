function solution(n) {
    let answer = 0;
    let binarynum = n.toString(2).split('');
    binarynum.push('0');
    let binarycount = 0;
    let permuation;
    let one = binarynum.forEach((v)=>{
        if(v===1) binarycount++;
    });
    const getPermuation = (arr,number) =>{
        const result = new Set();
        let arr1;
        if(number===1) return arr.map((v)=>[v]); 
        arr.forEach((v,i,o)=>{
            const fixer = v;
            const rest = o.filter((_,index)=> index !== i) 
            const permuation = getPermuation(rest,number-1); 
            const resultarr = permuation.map((value)=>[fixer, ...value]) 
            result.add(...resultarr);
        });
        arr1 = Array.from(result);
        return arr1;
    }
    permuation = getPermuation(binarynum,binarynum.length);
    console.log(permuation);
    for(let i = 0;i<permuation.length;i++){
        permuation[i] = parseInt(permuation[i].join(''),2);
    }
    permuation.sort();
    return permuation[0];
}

console.log(solution(78));