#include <iostream>
#include <queue>
#include <vector>
#include <algorithm>

using namespace std;

int N;
int houses;
int board[25][25];
int visited[25][25];

int dx[4] = { 0, 0, 1, -1 };
int dy[4] = { 1, -1, 0, 0 };

typedef struct location {
    int row, col, num;
};

queue<location> q;
vector<int> v;

// int houses;

void bfs() {
    while (!q.empty()) {
        int row = q.front().row;
        int col = q.front().col;
        int num = q.front().num;
        houses++;

        q.pop();

        for (int d = 0; d < 4; d++) {
            int next_row = row + dx[d];
            int next_col = col + dy[d];

            if (next_row >= 0 && next_row < N
                && next_col >= 0 && next_col < N
                && board[next_row][next_col] == 1
                && visited[next_row][next_col] != 1) {
                visited[next_row][next_col] = 1;
                q.push({ next_row, next_col, num + 1 });
            }
        }
    }
}

int main() {
    // input
    cin >> N;

    for (int i = 0; i < N; i++) {
        string input;
        cin >> input;
        for (int j = 0; j < N; j++) {
            board[i][j] = input[j] - '0';
        }
    }

    // bfs
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            if (board[i][j] == 0) continue;
            else if (board[i][j] == 1 && visited[i][j] == 0) {
                houses = 0;
                q.push({ i, j, 1 });
                visited[i][j] = 1;
                bfs();
                v.push_back(houses);

            }
        }
    }

    // sort
    sort(v.begin(), v.end());

    // print
    cout << v.size() << "\n";
    for (int i = 0; i < v.size(); i++) {
        cout << v[i] << "\n";
    }
}