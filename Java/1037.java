import java.util.Arrays;
import java.util.Scanner;
public class Main {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int num = scan.nextInt();
		
		int []Array1 = new int[num];
		
		for(int i = 0; i<Array1.length;i++) {
			Array1[i] = scan.nextInt();
		}
		Arrays.sort(Array1);
		System.out.println(Array1[0]*Array1[(Array1.length)-1]);
	}
}