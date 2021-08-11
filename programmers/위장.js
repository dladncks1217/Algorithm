function solution(clothes) {
    let answer = 0;
    let newclothes = new Map();
    let addclothes;
    let fac = 1;
    let add = 1;
    for(let i = 0;i<clothes.length;i++){
        if(newclothes.has(clothes[i][1])===false){ 
            newclothes.set(clothes[i][1],[clothes[i][0]]);
        }else{
            addclothes = newclothes.get(clothes[i][1]);
            addclothes.push(clothes[i][0]);
            newclothes.set(clothes[i][1],addclothes);
        }
    }
    newclothes.forEach((v)=>{
        add *= v.length+1;
    })
    answer = add-1;
    return answer;
}
