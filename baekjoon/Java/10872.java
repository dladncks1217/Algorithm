import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int a = scan.nextInt();
		int result = 1;
		for(int i = 1;i<=a;i++) {
			result = result*i;
		}
		System.out.print(result);
	}	
}