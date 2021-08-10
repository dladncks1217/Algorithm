import java.util.Scanner;
public class Main {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int month = scan.nextInt();
		int date = scan.nextInt();
		int day = 1; //Mon
		switch(month) {
		case 1: day+=(date-1); break;
		case 2: day+=31+(date-1); break;
		case 3: day+=31+28+(date-1); break;
		case 4: day+=31+28+31+(date-1); break;
		case 5: day+=31+28+31+30+(date-1); break;
		case 6: day+=31+28+31+30+31+(date-1); break;
		case 7: day+=31+28+31+30+31+30+(date-1); break;
		case 8: day+=31+28+31+30+31+30+31+(date-1); break;
		case 9: day+=31+28+31+30+31+30+31+31+(date-1); break;
		case 10: day+=31+28+31+30+31+30+31+31+30+(date-1); break;
		case 11: day+=31+28+31+30+31+30+31+31+30+31+(date-1); break;
		case 12: day+=31+28+31+30+31+30+31+31+30+31+30+(date-1); break;
		default : return;
		}
		day = day%7;
		switch(day) {
		case 1: System.out.println("MON"); break;
		case 2: System.out.println("TUE"); break;
		case 3: System.out.println("WED"); break;
		case 4: System.out.println("THU"); break;
		case 5: System.out.println("FRI"); break;
		case 6: System.out.println("SAT"); break;
		case 0: System.out.println("SUN"); break;
		}
	}
}