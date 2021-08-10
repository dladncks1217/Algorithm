#include <stdio.h>
int main() {
	int me_x, me_y, rect_x, rect_y;
	int result1, result2, result3, result4;
	
	scanf("%d %d %d %d", &me_x,&me_y, &rect_x, &rect_y);
	
	result1 = me_x;
	result2 = me_y;
	result3 = rect_x - result1;
	result4 = rect_y - result2;
	if ((result1 <= result2) && (result1 <= result3) && (result1 <= result4)) {
		printf("%d", result1);
		return 0;
	}
	if ((result2 <= result1) && (result2 <= result3) && (result2 <= result4)) {
		printf("%d", result2);
		return 0;
	}
	if ((result3 <= result1) && (result3 <= result2) && (result3 <= result4)) {
		printf("%d", result3);
		return 0;
	}
	if ((result4 <= result1) && (result4 <= result2) && (result4 <= result3)) {
		printf("%d", result4);
		return 0;
	}
}