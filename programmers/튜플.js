function solution(s) {
    let answer = [];
    let arr = []
    let str = s.replace('{{','').replace('}}','').split('},{') // 배열화
    str.forEach((v)=>{
        arr.push(v.split(','));
    })
    arr.sort((a,b)=> a.length-b.length);
    arr = arr.flat();
    let set  = new Set();
    arr.forEach((v)=>{
        set.add(v);
    })
    set.forEach((v)=>{
        answer.push(Number(v));
    })
    return answer;
}
console.log(solution("{{20,111},{111}}"));