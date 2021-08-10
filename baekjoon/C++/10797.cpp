#include <iostream>
 
using namespace std;
 
int main() {
    int date,count=0,a;
	cin>>date;
	for(int i = 0;i<5;i++){
		cin>>a;
		if(a!=date) continue;
		count++;
	}
	cout<<count;
}

