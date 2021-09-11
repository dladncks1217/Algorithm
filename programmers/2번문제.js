function isPrime(num) {
    if(num===1) return false;
    if(num === 2) {
      return true;
    }
    for(let i = 2; i <= Math.floor(Math.sqrt(num)); i++){
      if(num % i === 0){
        return false; 
      }
    }
    return true; 
  }
function solution(n, k) {
    let answer = 0;
    let k_number = n.toString(k); // 진수변환
    let new_k_number = [];
    k_number = k_number.split('0');
    k_number.forEach((v)=>{
        if(v!==''){
            new_k_number.push(v);
        }
    })
    console.log(new_k_number);
    new_k_number.forEach((v)=>{
        if(isPrime(Number(v))===true){
            answer++;
        }
    })
    return answer;
}
console.log(solution(110011,10));