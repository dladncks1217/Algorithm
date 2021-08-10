#include <stdio.h>
#include <string.h>

main(void)
{
	int number[26];
	char array[101];
	int index;
	scanf("%s", array);

	for (int i = 0; i < 26; i++) {
		number[i] = -1;
	}
	for (int i = 0; array[i] != NULL; i++) {
		index = array[i] - 97;
		if (number[index] == -1) {
			number[index] = i;
		}
	}

	for (int i = 0; i<26; i++) {
		printf("%d ", number[i]);
	}
	return 0;
}