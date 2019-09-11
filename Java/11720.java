import java.util.Scanner;
public class Main {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int a = scan.nextInt();
		int sum = 0;
		String str = scan.next();
		String [] array = new String[a];
		for(int i = 0;i<a;i++) {
			array[i] = str.charAt(i)+"";
		}
		for(int i = 0;i<a;i++) {
			sum = sum + Integer.parseInt(array[i]);
		}
		System.out.println(sum);
	}
}