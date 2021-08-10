import java.util.Scanner;
public class Main {
	
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int num1 = scan.nextInt();
		int num2 = scan.nextInt();
		int cnum1,cnum2;
		int one,two,three;
		one = (num1%10)*100;
		two = ((num1%100)-(num1%10));
		three = num1/100;
		cnum1 = three+two+one;
		one = (num2%10)*100;
		two = ((num2%100)-(num2%10));
		three = num2/100;
		cnum2 = three+two+one;
		if(cnum1>cnum2) {
			System.out.println(cnum1);
		}else {
			System.out.println(cnum2);
		}
	}
}