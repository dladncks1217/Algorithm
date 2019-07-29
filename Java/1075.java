import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int a = scan.nextInt();
		int b = scan.nextInt();
		if(a>=100) {
			while(true) {
				if(a%100==0) {
					break;
				}
				a=a-1;
			}
			while(true) {
				if(a%b==0) {
					break;
				}
				a=a+1;
			}
			if(a%100<10) {
				System.out.println("0"+a%100);
			}else {
				System.out.println(a%100);
			}
		}

	}
}