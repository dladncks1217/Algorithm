function solution(s, n) {
    let answer = '';
    let asciicheck = s.split('');
    answer = asciicheck.map((v)=>{
        if(v===' '){
            return ' ';
        }
        let newchar = v.charCodeAt();
        console.log(newchar);
        newchar+=n;
        if(newchar>90 && newchar<90){
            newchar = 65+(newchar-v.charCodeAt()-1);
        }else if(newchar>=122){
            newchar = 97+(newchar-v.charCodeAt()-1);
        }
        return String.fromCharCode(newchar);
    }).join('');
    return answer;
}
console.log(solution('a B z',4));