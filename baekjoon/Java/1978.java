import java.util.Scanner;
public class Main {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int num = scan.nextInt();
		int count = 0;
		int [] array = new int[num];
		for(int i = 0;i<array.length;i++) {
			array[i] = scan.nextInt();
		}
		for(int i = 0;i<array.length;i++) {
			if(array[i]==2) {
				count++;
				continue;
			}
			for(int k = 2;k<array[i];k++) {
				if(array[i]%k==0) {
					break;
				}else if(k==array[i]-1) {
					count++;
					break;
				}else {
					continue;
				}
			}
		}
		System.out.println(count);
	}
}