#include <iostream>
#include <algorithm>

using namespace std;

int N, M;
long long pSum[201][201];

long long answer = -123456789;

int main() {
    // input
    cin >> N >> M;
    for(int i = 1; i <= N; i++) {
        for(int j = 1; j <= M; j++) {
            cin >> pSum[i][j];

            // prefix sum
            pSum[i][j] += pSum[i][j - 1] + pSum[i - 1][j] - pSum[i - 1][j - 1];

        }
    }

    // brute force
    for (int i = 1; i <= N; i++) {
		for (int j = 1; j <= M; j++) {
			for (int k = i; k <= N; k++) {
				for (int l = j; l <= M; l++) {
					long long current = pSum[k][l] - pSum[k][j - 1] - pSum[i - 1][l] + pSum[i - 1][j - 1];
					answer = max(answer, current);
				}
			}
		}
	}

    cout << answer;

    return 0;
}