#include<stdio.h>
int main() {
	double A, B, D,d;
	int a, b;
	scanf("%lf %lf", &A, &B);
	D = A / B;
	
	printf("%.10lf\n", D);
	scanf("%d %d", &a, &b);
	d = (float)a / (float)b;
	printf("%.1lf", d);
	return 0;
}