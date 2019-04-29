import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		double num1 = scan.nextInt();
		double num2 = scan.nextInt();
		int sum = 0,count = 0;
		int minnum = 0;
		for(int i = 1;i*i<=10000;i++) {
			if(i*i>=num1&&i*i<=num2) {
				sum = sum+i*i;
				count++;
			}
			if(count==1) {
				minnum = i*i;
			}
			
		}
		if(sum==0) {
			System.out.println(-1);
			return;
		}
		System.out.println(sum);
		System.out.println(minnum);
	}	
}