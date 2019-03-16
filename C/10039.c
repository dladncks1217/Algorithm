#include<stdio.h>
main(){
    	int average;
	int a[]={0};	
	for(int i = 1;i<=5;i++){
		scanf("%d",&a[i]);
		if(a[i]<40){
			a[i] = 40;
		}	
	}
   	 average = (a[1]+a[2]+a[3]+a[4]+a[5])/5;
 	 printf("%d",average);
}