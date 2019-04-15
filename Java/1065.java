import java.util.Scanner;

public class Main {
	
	
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int a = scan.nextInt();
		int count = 0;
		int first, second,third,fourth,fifth;
		
		if(a<100) {
			System.out.println(a);
		}
		
		else if(a>100) {
			
			for(int i = 100;i<=a;i++) {
				first = i/1000;
				second = (i%1000)/100;
				third = (i%100)/10;
				fourth = (i%10)/1;
				
				if((first-second==second-third)&&(second-third)==(third-fourth)) {
					
					count++;
				}
				else if((first==0)&&(second-third)==(third-fourth)) {
					
					
					count++;
				}
				else {
					continue;
				}
				
			}	
			
			System.out.println(99+count);
		}
		
	}
}