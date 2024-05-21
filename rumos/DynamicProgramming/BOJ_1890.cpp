#include <iostream>

using namespace std;

int N;
int board[101][101];
long long dp[101][101];

int main() {

    // input
    cin >> N;
    for(int i = 1; i <= N; i++) {
        for(int j = 1; j <= N; j++) {
            cin >> board[i][j];
        }
    }

	// initialize
	dp[1][1] = 1;

    for(int i = 1; i <= N; i++) {
		for(int j = 1; j <= N; j++) {
			int count = board[i][j];

			if(dp[i][j] == 0 || board[i][j] == 0) continue;

			if(i + count <= N) dp[i + count][j] += dp[i][j];
			if(j + count <= N) dp[i][j + count] += dp[i][j];
		}
    }

    cout << dp[N][N];
}