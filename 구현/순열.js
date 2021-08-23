const getPermuation = (arr,number) =>{
    const result = [];
    if(number===1) return arr.map((v)=>[v]); // 하나짜리로 고를때 그대로 다 넘겨주기.

    arr.forEach((v,i,o)=>{
        const fixer = v;
        const rest = o.filter((_,index)=> index !== i) // v 제외 나머지 배열값들
        const permuation = getPermuation(rest,number-1); // 만약 number가 3이라면 꼭 포함해야할 v와 나머지 2개가 들어가야하기에 -1
        const resultarr = permuation.map((value)=>[fixer, ...value]) // 꼭 포함해야 할 v와 나머지 값들 ...value
        result.push(...resultarr);
    });
    return result;
}
console.log(getPermuation([1,7],2));
