function solution(bridge_length, weight, truck_weights) {
    let answer = 0; // 시간
    let queue = []; // 현재 다리 상태
    let queueSum  = 0; // 현재 다리 무게
    for(let i = 0;i<bridge_length;i++){ // 다리 길이는 queue로
        queue.push(0);
    }
    let nowTruck = truck_weights.shift(); // 현재 트럭의 무게
    
    // 큐에 트럭 넣고 한칸씩 땡기기
    queue.unshift(nowTruck);
    queue.pop();
    
    queueSum += nowTruck; // 다리 무게 증가
    answer++; // 시간증가
    
    while(queueSum){
        queueSum -= queue.pop(); // 지나가는거 계산
        nowTruck = truck_weights.shift();
        
        if(nowTruck+queueSum<=weight){ // 더 들어갈수 있다면
            queue.unshift(nowTruck);
            queueSum += nowTruck;
        }else{
            truck_weights.unshift(nowTruck);
            queue.unshift(0);
        }
        answer++;
    }
    return answer;
}
