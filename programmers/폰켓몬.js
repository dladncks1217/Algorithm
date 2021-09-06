function solution(nums) {
    let animals = new Set();
    nums.forEach((v)=>{
        animals.add(v);
    })
    let animallength = animals.size;
    let answer = 0;
    for(let i = animals.length;nums.length/2<animallength;animallength--){
        if(nums.length/2 >= animallength) return animallength;
    }
    return animallength;
}