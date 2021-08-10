import java.util.Scanner;

public class Practices {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int count = 0;
		String strs = scan.nextLine();
		String str = strs.trim();
		Character chars[] = new Character[str.length()];
		for(int k = 0;k<str.length();k++) {
			chars[k] = str.charAt(k);
		}
		for(int i = 0;i<str.length();i++) {
			if(chars[i].equals(' ')) {
				count++;
			}
		}
		count++;
		System.out.println(count);
	}
}