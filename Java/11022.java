import java.util.Scanner;
public class Main {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int a = scan.nextInt();
		int b,c;
		for(int i = 1;i<=a;i++) {
			b = scan.nextInt();
			c = scan.nextInt();
			System.out.println("Case #"+i+":"+" "+b+" + "+c+" = "+(b+c));
		}
		
	}
}