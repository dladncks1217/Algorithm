#include<stdio.h>
int main() {
	int c, i, j, k;
	double n, nn[1000], sum = 0, cnt = 0;

	scanf("%d", &c);     

	for (i = 0; i < c; i++) {   
		scanf("%lf", &n);  
		for (j = 0; j < n; j++) {  
			scanf("%lf", &nn[j]);    
			sum += nn[j];     
		}
		for (k = 0; k < n; k++) {   
			if ((sum / n) < nn[k])  
				cnt++;              
		}
		printf("%.3f%%\n", cnt / n * 100);  
		cnt = 0;   
		sum = 0;
	}

	return 0;
}