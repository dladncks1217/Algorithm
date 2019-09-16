#include <stdio.h>
#include<string.h>
int main() {
	int i;
	int hoi = 1; 
	char str[101] = { 0, };
	int len;

	gets(str);
	len = strlen(str);

	for (i = 0; i < len; i++) {
		if (str[i] != str[len - 1 - i]) {
			hoi = 0;
			break;
		}
	}
	if (hoi==1) {
		printf("1");
	}
	else {
		printf("0");
	}
}