import java.util.Arrays;
import java.util.Scanner;
public class Main {

	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int subject = scan.nextInt();
		int []scores = new int[subject];
		for(int i = 0;i<subject;i++) {
			scores[i] = scan.nextInt();
		}
		Arrays.sort(scores);
		int best = scores[subject-1];
		double sum = 0;
	    double []newscores = new double[subject];
	    for(int i = 0;i<subject;i++) {
	    	newscores[i] = (double)scores[i]/best*100;
	    	sum = sum+newscores[i];
	    }

	    System.out.println((double)sum/(double)subject);
	    
	    
	}
}