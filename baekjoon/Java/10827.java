import java.util.Scanner;
import java.math.BigDecimal;
public class Main {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		BigDecimal a = scan.nextBigDecimal();
		int b = scan.nextInt();
		
		BigDecimal result = a.pow(b);
		
		System.out.println(result.toPlainString());
		
	}
}