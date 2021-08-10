import java.util.Scanner;
public class Main {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int a = scan.nextInt();
		int first = a-1;
		int k,j,m;
		int n = 1;
		for(int i = 0;i<a;i++) {
			for(j = 0;j<first;j++) {
				System.out.print(" ");
			}
			for(k = 0;k<n;k++) {
				System.out.print("*");
			}
			for(m = 0;m<first;m++) {
				System.out.print(" ");
			}
			if(i==a-1) {
				return;
			}
			System.out.println("");
			first--;
			n+=2;
		}
		
	}
}