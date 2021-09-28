function solution(sizes) {
    let width, length;
    sizes.map((v)=>{
        let tmp;
        if(v[0]<v[1]){
            tmp = v[1];
            v[1] = v[0];
            v[0] = tmp;
        }
    })
    sizes.sort((a,b)=>{
        if(a[0]>b[0]) return -1;
        else return 1;
    })
    width = sizes[0][0];
    sizes.sort((a,b)=>{
        if(a[1]>b[1]) return -1;
        else return 1;
    })
    length = sizes[0][1];
    return width*length;
}