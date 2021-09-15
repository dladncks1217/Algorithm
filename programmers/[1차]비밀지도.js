function solution(n, arr1, arr2) {
    let map1 = [];
    let zero = ''
    map1 = arr1.map((v,i)=>{
        return v|arr2[i];
    })
    map1 = map1.map((v,i)=>{
        let change = v.toString(2)
        if(change.length < n){
            zero = '';
            for(let i = 0; i < n-change.length; i++){
                zero+='0';
            }
            change = change.split('');
            change.unshift(zero);
            change = change.join('');
        }
        change=change.split('1').join('#').split('0').join(' ');
        return change;
    })
    return map1;
}
console.log(solution(6,[46, 33, 33 ,22, 31, 50], [46, 33, 33 ,22, 31, 50]))