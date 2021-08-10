import java.util.Scanner;
public class Main {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int a = scan.nextInt();
		int number;
		for(int i = 0;i<a;i++) {
			number = scan.nextInt();
			for(int k = 0;k<number;k++) {
				System.out.print("=");
			}
			System.out.println();
		}
	}
}