function solution(s) {
    let a;
    let word = s.split(" ");
    for(let i = 0;i<word.length;i++){
        a = word[i].substring(0,1);
        if(typeof a !== 'number'){
            word[i]=a.toUpperCase()+word[i].substring(1,word[i].length).toLowerCase();
        }
    }
    return word.join(" ");
}
