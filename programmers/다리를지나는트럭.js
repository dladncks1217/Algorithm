function sum(array) {
  return array.reduce((a, b) => a + b, 0);
}
function solution(bridge_length, weight, truck_weights) {
  let timer = 0;
  const movingTrucks = Array.from({ length: bridge_length }, () => 0);
  const maxTruckLength = truck_weights.length; //
  const arrivedTrucks = [];

  while (arrivedTrucks.length !== maxTruckLength) {
    const nextInput = sum(movingTrucks) + truck_weights[0];

    if (nextInput <= weight || nextInput - movingTrucks[0] <= weight) {
      if (nextInput <= weight) {
        timer++;
        movingTrucks.push(truck_weights.shift());
        if (movingTrucks[0] !== 0) arrivedTrucks.push(movingTrucks.shift());
        else movingTrucks.shift();
      } else {
        timer++;
        movingTrucks.push(truck_weights.shift());
        arrivedTrucks.push(movingTrucks.shift());
      }
    } else {
      if (movingTrucks[0] > 0) {
        timer++;
        movingTrucks.push(0);
        arrivedTrucks.push(movingTrucks.shift());
      } else {
        timer++;
        movingTrucks.push(0);
        movingTrucks.shift();
      }
    }
  }

  return timer;
}

// console.log(solution(2, 10, [7, 4, 5, 6]));
console.log(solution(100, 100, [10]));
