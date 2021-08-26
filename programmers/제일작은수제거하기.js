function solution(arr) {
    let min = arr[0];
    let array=arr;
    for(let i = 1;i<arr.length;i++){
        if(min > arr[i]) min=arr[i];
    }
    array = array.filter((v)=>v!==min);
    if(array.length===0){
        array.push(-1);
        return array
    }
    return array;
}