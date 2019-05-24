#include <stdio.h>

int main() {
	int a, b, c, count[10] = { 0, }; 
	int result = 0; 
	scanf("%d %d %d", &a, &b, &c);
	result = a * b * c;      
	while (result>0) {
		switch (result % 10) {
		case 0: count[0]++; break;
		case 1: count[1]++; break;
		case 2: count[2]++; break;
		case 3: count[3]++; break;
		case 4: count[4]++; break;
		case 5: count[5]++; break;
		case 6: count[6]++; break;
		case 7: count[7]++; break;
		case 8: count[8]++; break;
		case 9: count[9]++; break;
		}
		result /= 10;
	}
	int i = 0;
	while (i<10) {
		printf("%d\n", count[i]);
		i++;
	}
	return 0;
}