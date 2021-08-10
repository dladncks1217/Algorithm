import java.util.Scanner;

public class Main {
	
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int sum=0;
		
		int a = scan.nextInt();
		for(int i = 0;i<=a;i++) {
			sum = sum+i;
		}
		System.out.println(sum);
	}
}