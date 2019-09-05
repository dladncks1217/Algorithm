import java.util.Scanner;
public class Main {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int []array = new int[8];
		for(int i = 0;i<8;i++) {
			array[i] = scan.nextInt();
		}
		for(int i = 0;i<7;i++) {
			
			if(array[i]+1 == array[i+1]) {
				if(i == 6) {
					System.out.println("ascending");
					return;
				}
				continue;
			}else {
				break;
			}
		}
		for(int i = 0;i<7;i++) {
			if(array[i]-1 == array[i+1]) {
				if(i==6) {
					System.out.println("descending");
					return;
				}
				continue;
			}else {
				break;
			}
		}
		System.out.println("mixed");
	}
}