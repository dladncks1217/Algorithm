import java.util.Scanner;
public class Main {
	
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int a,b;
		a = scan.nextInt();
		b = scan.nextInt();
		int []arr = new int[a];
		for(int i =0;i<a;i++) {
			arr[i] = scan.nextInt();
			if(arr[i]<b) {
				System.out.print(arr[i]+" ");
			}
		}
	}
}