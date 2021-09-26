function solution(w, h) {
    let width = w;
    let height = h;
    while (h != 0) {
        let tmp = h;
        h = w % h;
        w = tmp;
    }
    let broken = ((width+height)/w-1)*w;
    return width*height-broken;
}

solution(8, 12);