#include<stdio.h>
#include<math.h>

main(){
    int mush[10];
    int sum = 0;
    int i;
    for(i = 0;i<10;i++){
        scanf("%d",mush+i);
        
    }
    for(i = 0;i<10;i++){
        if(abs(sum+mush[i]-100)<=abs(sum-100)){
            sum +=mush[i];
        }
        else{
            break;
        }
    }
    printf("%d",sum);
}