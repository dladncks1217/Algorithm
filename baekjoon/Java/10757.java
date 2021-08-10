import java.util.Scanner;
import java.math.BigDecimal;
public class Main {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		BigDecimal a = scan.nextBigDecimal();
		BigDecimal b = scan.nextBigDecimal();
		
		
		System.out.println(a.add(b));
		
	}
}