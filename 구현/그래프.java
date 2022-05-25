import java.util.Scanner;
class MyGraph{
	int [][] adjacencyMatrix;

	public MyGraph(int n) {
		adjacencyMatrix = new int[n+1][n+1];
	}
	public void insertEdge(int v1, int v2) {
		adjacencyMatrix[v1][v2] = 1;
		adjacencyMatrix[v2][v1] = 1;
	}

	public void printVertax(int v) {
		for(int i = 1; i < adjacencyMatrix[v].length; i++) {
			if(adjacencyMatrix[v][i]==1) {
				System.out.print(i + " ");
			}
		}
	}
}
public class lab10_1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("lab10_1 : ");
		Scanner sc = new Scanner(System.in);

		int n = sc.nextInt();
		int e = sc.nextInt();

		MyGraph graph = new MyGraph(n);

		for(int i = 0; i < e; i++) {
			int v1 = sc.nextInt();
			int v2 = sc.nextInt();

			graph.insertEdge(v1, v2);
		}

		for(int i = 1; i <= n; i++) {
			System.out.print("\n"+i+"에 인접한 정점 = ");
			graph.printVertax(i);
		}

	}

}
