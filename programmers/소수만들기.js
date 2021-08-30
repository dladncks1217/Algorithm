function solution(nums) {
    let answer;
    let sosu=[];
    let count=0;
    const getCombination = (array,num) => {
        const result=[];
        if(num===1){
            return array.map(v=>[v])
        }
        array.forEach((v,i,o)=>{
            const rest = o.slice(i+1);
            const restCombination = getCombination(rest,num-1);
            const resultarr = restCombination.map((value)=>[v, ...value]);
            result.push(...resultarr);
        })
        return result;
    }
    answer = getCombination(nums,3);
    answer = answer.map((v)=>v[0]+v[1]+v[2]);
    answer.sort((a,b)=>a-b);
    
    let max = answer[answer.length-1];
    for(let i = 0;i<=max;i++) sosu.push(true);
    sosu.splice(0,2,false,false);
    for(let i = 2;i<=max;i++){
        if(sosu[i]){
            for(let k = i*i;k<=max;k+=i){
                sosu[k] = false;
            }
        }
    }
    
    answer.forEach((v)=>{
        console.log(v);
        if(sosu[v]) count++;
    })
    
    return count;
}