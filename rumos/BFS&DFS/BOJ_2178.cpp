#include <iostream>
#include <queue>

using namespace std;

int N, M;
int board[101][101];
int dist[101][101];

int dx[4] = { 0, 0, 1, -1 };
int dy[4] = { 1, -1, 0, 0 };

typedef struct location {
    int row, col, value;
};

queue<location> q;

int bfs() {
    while (!q.empty()) {
        int row = q.front().row;
        int col = q.front().col;
        int value = q.front().value;
        q.pop();

        // stop condition
        if (row == N && col == M) {
            return value;
        }

        for (int d = 0; d < 4; d++) {
            int next_row = row + dx[d];
            int next_col = col + dy[d];

            if (next_row >= 1 && next_row <= N
                && next_col >= 1 && next_col <= M
                && board[next_row][next_col] == 1
                && dist[next_row][next_col] > value + 1) {
                q.push({ next_row, next_col, value + 1 });
                dist[next_row][next_col] = value + 1;
            }
        }
    }
}

int main() {

    // input
    cin >> N >> M;

    for (int i = 0; i < N; i++) {
        string input;
        cin >> input;
        for (int j = 0; j < M; j++) {
            board[i + 1][j + 1] = input[j] - '0';
            dist[i + 1][j + 1] = 100000;
        }
    }

    // (1, 1) -> (N, M)
    q.push({ 1, 1, 1 });
    dist[1][1] = 1;
    cout << bfs();
}