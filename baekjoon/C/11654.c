
#include <stdio.h>
int main() {
	int n, i, j;
	scanf_s("%d", &n);
	for (i = 1; i <= n; i++) {

		for (j = n - i; j > 0; j--)

			printf(" ");
		for (j = 1; j <= i * 2 - 1; j++)

			printf("*");
		printf("\n");
	}
	for (i = n - 1; i > 0; i--) {
		for (j = n - i; j > 0; j--)

			printf(" ");
		for (j = 1; j <= i * 2 - 1; j++)

			printf("*");
		printf("\n");

	}

}