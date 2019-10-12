import java.util.Scanner;
import java.util.Arrays;

public class Main {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int a = scan.nextInt();
		int []arr = new int[a];
		for(int i = 0;i<a;i++) {
			arr[i] = scan.nextInt();
		}
		Arrays.sort(arr);
		for(int i = a-1;i>=0;i--) {
			System.out.println(arr[i]);
		}
		
	}
}
