import java.util.Scanner;
public class Main { //에라토스테네스의 체

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int num1 = scan.nextInt();
		int num2 = scan.nextInt();
		boolean tf = true;
		for(int i = num1;i<=num2;i++) {
			if(i==1) tf = false;
			int max = (int)Math.sqrt(i)+1;
			for(int k=2;k<max;k++) {
				if(i%k==0) {
					tf = false;
					break;
				}
			}
			if(tf == true) {
				System.out.println(i);
			}
			tf = true;
		}
		
	}
}