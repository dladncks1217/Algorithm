function solution(numbers, hand) {
    let answer = '';
    let Uhand = hand.slice(0,1).toUpperCase();
	let locationleft="*";
	let locationright="#";
	let number;
    let keypad = new Map([
		[1,[0,0]],[2,[1,0]],[3,[2,0]],[4,[0,1]],[5,[1,1]],
		[6,[2,1]],[7,[0,2]],[8,[1,2]],[9,[2,2]],["*",[0,3]],[0,[1,3]],["#",[2,3]]]);
    let result=[];
    numbers.forEach((v)=>{
        if(v===1||v===4||v===7){
            result.push('L');
            locationleft=v;
        }else if(v===3||v===6||v===9){
            result.push('R');
            locationright=v;
        }else{
            number=keypad.get(v)
			let left=keypad.get(locationleft);
			let right=keypad.get(locationright);			
			let leftlength=Math.abs(left[0]-number[0])+Math.abs(left[1]-number[1]);
			let rightlength=Math.abs(right[0]-number[0])+Math.abs(right[1]-number[1]);
			if(rightlength===leftlength){
				result.push(Uhand);
				if(Uhand==="R"){
					locationright=v;
				} else {
					locationleft=v;
				}
			}else if(leftlength>rightlength){
				result.push('R');
				locationright=v;
			}else{
				result.push('L');
				locationleft=v;
			}
        }
    })
    answer = result.join('');
    return answer;
}
