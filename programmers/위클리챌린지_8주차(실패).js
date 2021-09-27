function solution(sizes) {
    let answer = 0;
    sizes.sort((a,b)=>{
        if(a[0]>b[0]) return -1
        else return 1;
    })
    let widthmax = sizes[0]; // 가장 큰 가로
    sizes.sort((a,b)=>{
        if(a[1]>b[1]) return -1
        else return 1;
    })
    let heightmax = sizes[0]; // 가장 큰 세로
    if(widthmax[0]>=heightmax[1]){
            sizes.shift();
            sizes.sort((a,b)=>{
            if(a[1]>b[1]) return -1
            else return 1;
        })
    }
    heightmax = sizes[0];
    return widthmax[0]*heightmax[1];
}