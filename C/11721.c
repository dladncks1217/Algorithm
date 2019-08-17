#include<stdio.h>
#include<string.h>
void main() {
	char a[100] = { 0, };
	int count = 0;
	scanf("%s", a);
	for (int i = 0;i < strlen(a);i++) {
		if (count !=0 && count % 10==0) {
			printf("\n");
		}
		printf("%c", a[i]);
		count++;
	}
}
