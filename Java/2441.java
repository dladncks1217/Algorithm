import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		
		int a = scan.nextInt();
		int k = 0, x = 0;
		for(int i = 0;i<a;i++,k++) {
			for(int j = 0;j<i;j++) {
				System.out.print(" ");
			}
			for(x = 0;k<a-x;x++) {
				System.out.print("*");
			}
			
			System.out.println("");	
		}
		
	}
	
}