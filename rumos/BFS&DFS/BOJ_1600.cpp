#include <iostream>
#include <queue>

using namespace std;

int K; // 말처럼 이동 가능한 횟수
int W, H; // 가로, 세로

int board[201][201];
int visited[201][201][31];

int h_dx[8] = { 2, 1, -1, -2, -2, -1, 1, 2 };
int h_dy[8] = { 1, 2, 2, 1, -1, -2, -2, -1 };

int n_dx[4] = { 0, 0, 1, -1 };
int n_dy[4] = { 1, -1, 0, 0 };
int answer = -1;

typedef struct monkey {
    int row, col, k, dist;
};

queue<monkey> q;

void bfs() {
    while (!q.empty()) {
        int row = q.front().row;
        int col = q.front().col;
        int k = q.front().k; // left value
        int dist = q.front().dist;

        q.pop();

        // stop condition
        if (row == H - 1 && col == W - 1) {
            answer = dist;
            return;
        }

        if (k > 0) {
            for (int d = 0; d < 8; d++) {
                int next_row = row + h_dx[d];
                int next_col = col + h_dy[d];

                if (next_row >= 0 && next_row < H
                    && next_col >= 0 && next_col < W
                    && visited[next_row][next_col][k - 1] != 1
                    && board[next_row][next_col] != 1) {
                    visited[next_row][next_col][k - 1] = 1;
                    q.push({ next_row, next_col, k - 1, dist + 1 });
                }
            }
        }

        for (int d = 0; d < 4; d++) {
            int next_row = row + n_dx[d];
            int next_col = col + n_dy[d];

            if (next_row >= 0 && next_row < H
                && next_col >= 0 && next_col < W
                && board[next_row][next_col] != 1
                && visited[next_row][next_col][k] != 1) {
                visited[next_row][next_col][k] = 1;
                q.push({ next_row, next_col, k, dist + 1 });
            }

        }
    }
}

int main() {

    // input
    cin >> K >> W >> H;

    for (int i = 0; i < H; i++) {
        for (int j = 0; j < W; j++) {
            cin >> board[i][j];
        }
    }

    // start with (0, 0, 0)
    visited[0][0][K] = 1;
    q.push({ 0, 0, K, 0 });
    bfs();
   
    cout << answer;
}