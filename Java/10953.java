import java.util.Scanner;
public class Main {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int a = scan.nextInt();
		for(int i = 0;i<a;i++) {
		String []numbers = scan.next().split(",");
		System.out.println(Integer.parseInt(numbers[0])+Integer.parseInt(numbers[1]));
		}
	}
}