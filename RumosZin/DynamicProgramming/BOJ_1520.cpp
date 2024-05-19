#include <iostream>

using namespace std;

int M, N;
int graph[501][501];
int dp[501][501];

int dx[4] = { 1, -1, 0, 0 };
int dy[4] = { 0, 0, 1, -1 };
int answer;

int dfs(int x, int y) {
	if (x == M && y == N) { return 1; }
	if (dp[x][y] != -1) return dp[x][y];

	dp[x][y] = 0;

	for (int d = 0; d < 4; d++) {
		int next_x = x + dx[d];
		int next_y = y + dy[d];

		if (next_x >= 1 && next_x <= M
			&& next_y >= 1 && next_y <= N
			&& graph[next_x][next_y] < graph[x][y]) {
			dp[x][y] += dfs(next_x, next_y);
		}
	}
	return dp[x][y];
}


int main() {
	cin >> M >> N;
	answer = 0;
	for (int i = 1; i <= M; i++) {
		for (int j = 1; j <= N; j++) {
			cin >> graph[i][j];
			dp[i][j] = -1;
		}
	}
	answer = dfs(1, 1);
	cout << answer;
}