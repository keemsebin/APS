#include <iostream>

using namespace std;

int T;
int n;
int answer;

int sticker[4][100001]; 
int dp[4][100001];

int main() {

    // input
    cin >> T;

    // each test case
    for(int t = 0; t < T; t++) {

        // initialize
        answer = 0;

        // input
        cin >> n;
        for(int i = 1; i <= 2; i++) {
            for(int j = 1; j <= n; j++) {
                cin >> sticker[i][j];
            }
        }

        // dp
        dp[1][1] = sticker[1][1];
		dp[2][1] = sticker[2][1];
		dp[1][2] = dp[2][1] + sticker[1][2];
		dp[2][2] = dp[1][1] + sticker[2][2];
		
		for (int i = 3; i <= n; i++) {
			dp[1][i] = sticker[1][i] + max(dp[2][i - 1], dp[2][i - 2]);
			dp[2][i] = sticker[2][i] + max(dp[1][i - 1], dp[1][i - 2]);
		}

		answer = max(dp[1][n], dp[2][n]);

		cout << answer << "\n";
    }
}