#include<stdio.h>
main(){
    int a,b;
    scanf("%d %d",&a,&b);
    if(a<=1000&&b<=1000){
        printf("%d",(a+b)*(a-b));
    }
}