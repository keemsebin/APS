#include <iostream>
#include <vector>
#include <cmath>

using namespace std;

int N, r, c;

vector<int> num;
int answer;

void recursive(int n, int row, int col) {

	if (n == 1) {
		if (row == 0 && col == 0) num.push_back(0);
		else if (row == 0 && col == 1) num.push_back(1);
		else if (row == 1 && col == 0) num.push_back(2);
		else if (row == 1 && col == 1) num.push_back(3);
		return;
	}

	int half = pow(2, n - 1);
	int area = half * half; // 한 구역의 숫자의 개수
	
	// 몇 번째 구역인지 구하기
	if (row < half && col < half) { // 제1사분면
		recursive(n - 1, row, col);
	}
	else if (row < half && col >= half && col < 2 * half) {
		num.push_back(area); // 16을 저장
		recursive(n - 1, row, col - half);
	}
	else if (row >= half && row < 2 * half && col < half) {
		num.push_back(area * 2);
		recursive(n - 1, row - half, col);
	}
	else if (row >= half && row < 2 * half && col >= half && col < 2 * half) {
		num.push_back(area * 3);
		recursive(n - 1, row - half, col - half);
	}
}

int main() {
	cin >> N >> r >> c;

	recursive(N, r, c);
	answer = 0;
	for (int i = 0; i < num.size(); i++){
		answer += num[i];
	}
	cout << answer;
}