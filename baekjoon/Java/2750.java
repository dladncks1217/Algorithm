import java.util.Arrays;
import java.util.Scanner;

public class Main {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int a = scan.nextInt();
		int []arr = new int[a];
		for(int i = 0;i<a;i++) {
			arr[i]= scan.nextInt();
		}
		Arrays.sort(arr);
		for(int i = 0;i<arr.length;i++) {
			if(i==0) {
				System.out.println(arr[0]);
				continue;
			}
			if(arr[i]==arr[i-1]) {
				continue;
			}else {
				System.out.println(arr[i]);
			}
			
		}
	}
}