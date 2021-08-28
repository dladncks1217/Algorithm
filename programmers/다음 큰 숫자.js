function solution(n){
    let first = n;
    let arr1 = first.toString(2).split('').filter(v=>v==='1').length;
    while(true){
        first++;
        let arr2 = first.toString(2).split('').filter(v=>v==='1').length;
         if(arr1===arr2) return first;
    }
}
console.log(solution(78));