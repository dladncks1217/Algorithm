public class MyHashTableTest {

	static class MyHashTable {
		private class Node{
			int key;
			Node link;
		}
		private Node[] table;
		private int m; // 테이블 크기 
		private int n; // 원소 수 
		private static final double A = 0.6189339887;

		public MyHashTable(int m) {
			// table, m, n 적절히 초기화 
			this.m = m;
			this.table = new Node[m];
			n = 0;
		}

		// 곱하기 방법을 이용하여 key 해시값 계산 
		private int hash(int key) {
			return (int) (((key * A) % 1) * m);
		}

		public void add(int key) {
			// key 해시값을 구하여 그 위치의 연결리스트 맨 앞에 key값을 저장한 노드 삽입 
			int index = hash(key);
			if(table[index]==null) {
				table[index] = new Node();
				table[index].key = key; 
			}else {
				Node newNode = new Node();
				newNode.key = table[index].key;
				newNode.link = table[index];
				table[index] = new Node();
				table[index].key = key;
				table[index].link = newNode.link; 
			}
			n++;
		}

		public double getLoadFactor() {
			// 테이블 크기와 현재 원소 수를 이용해 적재율 계산 
			return (double)n/m;
		}
		public boolean contains(int key) {
			// key 해시값 구해 그 위치의 연결리스트에서 key값 검색 
			int index = hash(key);
			Node check = table[index];
			while (check != null) {
				if (key == check.key) {
					return true;
				} else
					check = check.link;
			}
			return false;
		}

		public void printTable() {
			for(int i =0;i<table.length;i++) {
				System.out.print("table["+i+"] = ");
				Node temp = table[i];
				while(temp != null) {
					System.out.print(temp.key+" ");
					temp = temp.link;
				}
				System.out.println();
			}
		}
	}
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.println("hw7_1 : 임우찬");

		// 입력 없이 실행하기 위해 해시 테이블에 저장할 key들을 배열에 다음과 같이 수록해 둠
		int[] addArray = {1, 5, 7, 9, 2, 4, 6, 8, 10, 30, 40};
		int[] searchArray = {4, 6, 8, 10, 30, 40, 1, 5, 7, 9, 2, 111, 333};

		// 테이블 크기가 8인 MyHashTable 객체를 생성(hashTable)
		MyHashTable hashTable = new MyHashTable(8);

		// hashTable에 addArray의 key를 모두 삽입
		for(int key: addArray) {
			hashTable.add(key);	
		}	

		// hashTable에 제대로 삽입되었는지 확인하기 위해 현재 테이블 상태와 적재율을 출력
		hashTable.printTable();
		System.out.println("load factor = " + hashTable.getLoadFactor());

		// hashTable에서 searchArray의 각 key를 조회하여 결과 true/false를 출력 
		for(int key: searchArray) {
			System.out.print(hashTable.contains(key) + " ");	
		}
	}
}
