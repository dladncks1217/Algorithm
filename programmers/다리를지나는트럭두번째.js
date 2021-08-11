function sum(a){
	let sum =0 ;
	for(let i of a){
		sum+=i;
	}
	return sum;
}
function solution(bridge_length, weight, truck_weights) {
    let moving = []; // 지금 움직이고있는거
    let already = []; // 이미 지나간거
    let trucknum = truck_weights.length; // 트럭수
    let time = 1; // 시간
    let last = truck_weights.shift(); // 마지막으로 들어간거
    let gone; // 이미 지나간거(최근)
	let sums;
    for(let i = 0;i<bridge_length-1;i++){
        moving.push(0); // 일단 시간계산겸 0넣음
    }
    moving.push(last);
    while(already.length!==trucknum){ // 다 지나간거 아니면 멈추지마셈	
        if(truck_weights[0]+sum(moving)>weight){ // 더이상 못들어갈때
			sums = sum(moving);
            if(moving[0]!==0){ // 나올라는게 트럭일떄
                gone = moving.shift(); 
                already.push(gone);
				if(truck_weights[0]+sum(moving)>weight){ // 담게 못들어가는상황
				    moving.push(0);
					last = truck_weights[0];
               		time++;
				}else{
				    moving.push(truck_weights.shift()); // 담게 들어가는상황
					last = truck_weights[0];
               		time++;
				}
            }else{ // 트럭 아직 다리에 있을때
                moving.shift(); 
                moving.push(0);
                time++;
            } 
        }else{ // 여러개 들어가기 가능할때 or 새로들어가기
            if(moving[0]!==0){ // 들어갔는데 나올라는게 트럭일때
                gone = moving.shift();
                already.push(gone);
                last = truck_weights.shift();
                moving.shift();
                moving.push(last);
                time++;
            }else{
                moving.shift();
                moving.push(truck_weights.shift());
                time++;
            }
            
        }
    }
    return time;
}
