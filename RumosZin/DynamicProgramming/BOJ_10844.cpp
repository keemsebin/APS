#include <iostream>
#define value 1000000000

using namespace std;

int N;
long long dp[101][10];

int main() {

    // input
    cin >> N;

    // initialize
    for(int i = 1; i <= 9; i++) {
        dp[1][i] = 1;
    }
	dp[1][0] = 0;

    for(int i = 2; i <= N; i++) {
        for(int j = 0; j <= 9; j++) {
			if(j == 0) dp[i][j] = dp[i - 1][j + 1] % value;
			else if(j == 9) dp[i][j] = dp[i - 1][j - 1] % value;
            else dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j + 1]) % value;
        }
    }

    // answer
    long long answer = 0;
    
    for(int i = 0; i <= 9; i++) {
        answer += dp[N][i];
    }

    cout << answer % value;

}