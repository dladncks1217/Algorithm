function getCombination(arr,number){
    const result = [];
    if(number === 1) return arr.map((v)=>[v]);
    arr.forEach((v,i,o)=>{
        const rest = o.slice(i+1);
        const restcombination = getCombination(rest, number-1);
        const resultarr = restcombination.map((value)=>[v, ...value]);
        result.push(...resultarr);
    });
    return result;
}
function solution(people, limit){
    let max = 0;
    let maxarr = [];
    let answer = 0;

    while(people.length!==1){
        console.log(people);
        let arr = [];
        for(let i = 0;i<people.length;i++){ // 조합들 만들기
            arr.push( ...getCombination(people, i));
        }
        arr.forEach((v,i)=>{
            let sum = 0;
            for(let k = 0;k<v.length;k++){
                sum+=v[k];
            }
            if(sum>max&&sum<=limit){ // 크고 제한사항에 안걸린다면
                max = sum;
                maxarr.length = 0; // 배열 초기화하고
                maxarr.push(...v); // 이거 빼줄거임
            }
        })

        for(let i = 0;i<maxarr.length;i++){ // 빼주는작업
            people.splice(people.indexOf(maxarr[i]),1);
        }
        answer++;
        maxarr.length = 0;
        max = 0;
    }
    return ++answer;
}

console.log(solution([70, 80, 50],100));