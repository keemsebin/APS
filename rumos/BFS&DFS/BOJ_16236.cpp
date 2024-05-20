#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>

using namespace std;

int N;
int board[21][21];
int visited[21][21];

typedef struct shark {
    int row, col, size, fish, dist;
};

typedef struct fish {
    int row, col, dist;
};

queue<shark> q;
vector<fish> v;

int shark_row;
int shark_col;
int shark_size;
int shark_fish;
int answer = 0;

int dx[4] = { 0, 0, 1, -1 };
int dy[4] = { 1, -1, 0, 0 };

bool cmp(fish a, fish b) {
    if (a.dist < b.dist) return true;
    else if (a.dist == b.dist) {
        if (a.row < b.row) return true;
        else if (a.row == b.row) {
            if (a.col < b.col) return true;
            else return false;
        }
        else return false;
    }
    else return false;
}

void bfs() {
    while (!q.empty()) {
        int row = q.front().row;
        int col = q.front().col;
        int size = q.front().size;
        int fish = q.front().fish;
        int dist = q.front().dist; 
        q.pop();

        // can eat?
        for (int d = 0; d < 4; d++) {
            int next_row = row + dx[d];
            int next_col = col + dy[d];

            if (next_row >= 0 && next_row < N
                && next_col >= 0 && next_col < N
                && board[next_row][next_col] <= size
                && visited[next_row][next_col] != 1) {
                q.push({ next_row, next_col, size, fish, dist + 1 });
                if (board[next_row][next_col] > 0
                    && board[next_row][next_col] < size) {
                    v.push_back({ next_row, next_col, dist + 1});
                }
                visited[next_row][next_col] = 1;
            }
        }


    }
}

int main() {

    // input
    cin >> N;


    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) {
            cin >> board[i][j];
            if (board[i][j] == 9) {
                shark_row = i;
                shark_col = j;
                board[i][j] = 0;
            }
        }
    }

    shark_size = 2;
    shark_fish = 0;

    while (true) {

        // initialize
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                visited[i][j] = 0;
            }
        }

        v.clear();

        // find food bfs
        q.push({ shark_row, shark_col, shark_size, shark_fish, 0 });
        visited[shark_row][shark_col] = 1;
        bfs();

        // sort food v
        sort(v.begin(), v.end(), cmp);

        // stop condition : nothing to eat fish
        if (v.size() == 0) {
            break;
        }

        // eat and update shark
        answer += v[0].dist;
        shark_row = v[0].row;
        shark_col = v[0].col;
        if (shark_size == shark_fish + 1) {
            shark_size += 1;
            shark_fish = 0;
        }
        else {
            shark_fish++;
        }
        board[shark_row][shark_col] = 0;
    }

    cout << answer;   
}