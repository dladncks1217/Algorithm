// fees 기본시간, 기본요금, 단위 시간, 단위 요금
function solution(fees, records) {
    let answer = [];
    let car = [];
    let fee = [];
    let incar = []; // 들어와있는 차량
    let incartime = []; // 들어와있는 차량 들어온시간
    let carandFees = new Map();
    records.forEach((v,i)=>{
        let time = v.split(' ')[0]; // 들어온, 나간시간
        let carnum = v.split(' ')[1]; // 차번호
        let inoutcheck = v.split(' ')[2]; // 입차출차여부
        if(inoutcheck === 'IN'){ // 들어오는차라면
            incar.push(carnum); // 들어온 차 번호
            incartime.push(time); // 들어온시간 넣어주기
        }else if(inoutcheck === 'OUT'){ // 나가는차라면
            let carIndexCheck = incar.indexOf(carnum); // 주차되어있는 차 인덱스
            let indate = new Date(2021, 01, 01, incartime[carIndexCheck].split(':')[0], incartime[carIndexCheck].split(':')[1]); // 들어온 시간
            let outdate = new Date(2021, 01, 01, time.split(':')[0], time.split(':')[1]); // 나간 시간
            let feecalculateTime = (outdate-indate)/1000/60;
            let resultfee = Math.ceil(feecalculateTime/fees[2])*fees[3];
            if(resultfee <5000) resultfee = 5000; // 기본비용 계산
            car.push(carnum); // 비용 계산된거 넣어주기
            fee.push(resultfee);
            incar.splice(carIndexCheck,1) // 들어와있는 차량 시간 나갔으면 없애주기
            incartime.splice(carIndexCheck,1)
        }
    })
    if(incar.length!==0){ // 남아있는 차들 계산
        incar.forEach((v,i)=>{
            let indate = new Date(2021, 01, 01, incartime[i].split(':')[0], incartime[i].split(':')[1]); // 들어온 시간
            let outdate = new Date(2021, 01, 01, 23, 59); // 나간 시간
            let feecalculateTime = (outdate-indate)/1000/60;

            let resultfee = Math.ceil(feecalculateTime/fees[2])*fees[3];
            if(resultfee <5000) resultfee = 5000; // 기본비용 계산
            car.push(v); // 비용 계산된거 넣어주기
            fee.push(resultfee);
            incar.splice(i,1) // 들어와있는 차량 시간 나갔으면 없애주기
            incartime.splice(i,1);
        })
    }
    console.log(car, fee);
    return answer;
}

console.log(
    solution([180, 5000, 10, 600],
    ["05:34 5961 IN", "06:00 0000 IN", "06:34 0000 OUT", "07:59 5961 OUT", "07:59 0148 IN", "18:59 0000 IN", "19:09 0148 OUT", "22:59 5961 IN", "23:00 5961 OUT"])
);