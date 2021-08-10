function solution(n, lost, reserve) {
    let answer =0;
	let truefalse;
    let students = new Map();
	for(let i = 1;i<=n; i++){
		students.set(i,1);
	}
	for(let i = 1;i<=n; i++){
		if(reserve.includes(i)) students.set(i,2);
	}
	for(let i = 1;i<=n; i++){
		if(lost.includes(i)){
			if(students.get(i)===2){
				students.set(i,1);	
			}else students.set(i,0);
		}
	}
	for(let i = 1; i<=n; i++){
		if(students.get(i)===0){
			if(students.get(i-1)===2){
				students.set(i-1,1);
				students.set(i,1);	
			}else if(students.get(i+1)===2){
				students.set(i+1,1);
				students.set(i,1);	
			}else continue;
		}
	}
	students.forEach((v)=>{ if(v>0) answer++; })
    return answer;
}
