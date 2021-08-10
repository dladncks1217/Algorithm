import java.util.Scanner;
public class Main {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int num1,num2;
		while(true) {
			num1 = scan.nextInt();
			num2 = scan.nextInt();
			if(num1==0&&num2==0) {
				return;
			}
			if(num2%num1 == 0) {
				System.out.println("factor");
			}else if(num1%num2 == 0) {
				System.out.println("multiple");
			}else {
				System.out.println("neither");
			}
		}
	}
}