import java.util.Scanner;
public class Main {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int a = scanner.nextInt();
		for(int i = 1;i<=a;i++) {
			for(int j = 1;j<=a-i;j++) {
				System.out.print(" ");
			}
			for(int k = 1;k<=i;k++) {
				System.out.print("*");
			}
			
			System.out.print("\n");
		}

	}

}
