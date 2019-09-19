import java.util.Scanner;
public class Baekjoon {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int testcase = scan.nextInt();
		int []arr = new int[testcase];
		for(int b = 0;b<testcase;b++) {
			arr[b] = 0;
		}
		int carprice,bumpernum,neednum,money;
		int i = 0;
		while(i<testcase) {
			carprice = scan.nextInt();
			bumpernum = scan.nextInt();
			for(int k = 0;k<bumpernum;k++) {
				neednum = scan.nextInt();
				money = scan.nextInt();
				arr[i]+=(neednum*money);
			}
			arr[i]+=carprice;
			i++;
		}
		for(int x = 0;x<testcase;x++) {
			System.out.println(arr[x]);
		}
	}
}