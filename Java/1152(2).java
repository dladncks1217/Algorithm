import java.util.Scanner;
import java.util.StringTokenizer;

public class Practices {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		String str = scan.nextLine();
		String str1 = str.trim();
		StringTokenizer tok = new StringTokenizer(str1," ");
		System.out.println(tok.countTokens());
	}
}