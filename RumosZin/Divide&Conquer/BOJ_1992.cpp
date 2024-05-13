#include <iostream>
#include <string>

using namespace std;

int N;
int graph[64][64];

void dc(int row, int col, int n) {
	
	for (int i = row; i < row + n; i++) {
		for (int j = col; j < col + n; j++) {
			if (graph[i][j] != graph[row][col]) {
				cout << "(";
				dc(row, col, n / 2);
				dc(row, col + n / 2, n / 2);
				dc(row + n / 2, col, n / 2);
				dc(row + n / 2, col + n / 2, n / 2);
				cout << ")";
				return;
			}
		}
	}
	cout << graph[row][col];
}

int main() {

	// 1. input
	int zero = 0;
	int one = 0;
	cin >> N;
	for (int i = 0; i < N; i++) {
		string input;
		cin >> input;
		for (int j = 0; j < N; j++) {
			graph[i][j] = input[j] - '0';
		}
	}

	// 2. divide and conquer
	dc(0, 0, N);
}