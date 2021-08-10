import java.util.Scanner;
public class Main {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int a = scan.nextInt();
		int []array = new int[a];
		int num1,num2;
		for(int i = 0;i<a;i++) {
			num1 = scan.nextInt();
			num2 = scan.nextInt();
			array[i] = num1+num2;
		}
		for(int i = 0;i<a;i++) {
			System.out.println("Case #"+(i+1)+": "+array[i]);
		}
	}
}