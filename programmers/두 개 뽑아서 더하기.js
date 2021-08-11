function solution(numbers) {
let newarr = numbers.map((v)=>{return v});
    newarr.shift();
    let set = new Set();
    let answer = [];
    numbers.forEach((v)=>{
        newarr.forEach((j)=>{
            set.add(v+j);
        })
        newarr.shift();
    })
    set.forEach((v)=>{
        answer.push(v);
    })
    answer.sort((a,b)=>{return a-b});
    return answer;

}
