import java.util.Scanner;
import java.util.Arrays;
public class Main {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int []array1 = new int[9];
		int []array2 = new int[9];
		int best;
		for(int i = 0;i<9;i++) {
			array1[i] = scan.nextInt();
		}
		System.arraycopy(array1, 0, array2, 0,9);
		Arrays.sort(array1);
		best = array1[8];
		for(int i = 0;i<array1.length;i++) {
			if(array1[8]==array2[i]) {
				System.out.println(best);
				System.out.println(i+1);
				return;
			}
		}
	}
}