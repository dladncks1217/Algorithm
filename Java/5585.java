import java.util.Scanner;

public class Main {
   
   public static void main(String[] args) {
	   Scanner sc = new Scanner(System.in);
	   int pay_money = sc.nextInt();
	   int give_money = 1000-pay_money;
	   int number=0;
	   int flag=0;
	   Integer[] a = {500,100,50,10,5,1};
	   
	   while(true) {
		   if(give_money==0) {
			   break;
		   }
		   int sub = give_money/a[flag];
		   if(sub!=0) {
			   number+=sub;
			   give_money-= sub*a[flag];
		   }
		   flag++;

	   }
	   System.out.println(number);
   }
}