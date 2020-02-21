#include <iostream>
using namespace std;
int main(int argc, const char * argv[]) {
	int a,first,second,result,plusresult,count = 0;
	cin >> a;
	result = a;
	while(1){
		second = result%10;
		first = (result-second)/10;
		if(first+second>=10){
			plusresult = (first+second)%10;
			result = (second*10)+plusresult;
			count++;
		}else{
			plusresult = first+second;
			result = (second*10)+plusresult;
			count++;
		}
		if(result==a){
			cout << count;
			break;
		}
	}
}