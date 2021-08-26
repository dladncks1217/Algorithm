function solution(n) {
    let arr = n.toString().split('').reverse();
    arr = arr.map((v)=>{
        return Number(v);
    })
    return arr;
}