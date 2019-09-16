import java.util.Scanner;
public class Main {
	
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int hour = scan.nextInt();
		int minute = scan.nextInt();
		int check;
		if(hour==0) hour = 24;
		
		if(minute>45) {
			
			System.out.print(hour);
			System.out.print(" ");
			System.out.print(minute-45);
		}else if(minute<45) {
			check = 45-minute;
			System.out.print(hour-1);
			System.out.print(" ");
			System.out.print(60-check);
		}else if(minute==45) {
			System.out.println(hour+" "+0);
		}
	}
}