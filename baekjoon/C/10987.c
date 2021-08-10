#include<stdio.h>
#include<string.h>
int main(){
	char a[100];
	gets(a);
	int count = 0;
	for (int i = 0;i < strlen(a);i++) {
		switch (a[i]) {
		case 'a': count++; break;
		case 'e': count++; break;
		case 'i': count++; break;
		case 'o': count++;break;
		case 'u':count++;break;
		}
	}
	printf("%d", count);
}