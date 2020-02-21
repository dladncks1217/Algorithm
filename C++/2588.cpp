#include <iostream>
using namespace std;
int main(int argc, const char * argv[]) {
	int a,b,b_first,b_second,b_third;
	cin >> a;
	cin >> b;
	b_third = b%10;
	b_second = ((b%100) - b_third)/10;
	b_first = (b-b_second-b_third)/100;
	cout << b_third*a << '\n' << b_second*a << '\n' <<b_first*a << '\n' << a*b <<'\n';
	
}

