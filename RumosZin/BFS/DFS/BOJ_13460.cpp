#include <iostream>
#include <queue>

using namespace std;

int N, M; // height, width

typedef struct INFO {
    int ry, rx, by, bx, count;
};

queue<INFO> q;

INFO start;
char board[10][10];
int visited[10][10][10][10] = { 0, };

int dy[4] = {0, 0, 1, -1};
int dx[4] = {1, -1, 0, 0};

int answer = -1;

int bfs() {

    q.push(start);
    visited[start.ry][start.rx][start.by][start.bx] = 1;

    while (!q.empty()) {
        INFO cur = q.front();
        q.pop();

        // fail condition
        if (cur.count > 10) break;

        // success condition
        if (board[cur.ry][cur.rx] == 'O' && board[cur.by][cur.bx] != 'O') { 
            answer = cur.count;
            break;
        }

        // find next position
        for (int d = 0; d < 4; d++) {
            int next_ry = cur.ry;
            int next_rx = cur.rx;
            int next_by = cur.by;
            int next_bx = cur.bx;

            // RED moving
            while (1) {
                // until wall or hole
                if (board[next_ry][next_rx] != '#' && board[next_ry][next_rx] != 'O') {
                    next_ry += dy[d], next_rx += dx[d];
                }
                else {
                    if (board[next_ry][next_rx] == '#') {
                        next_ry -= dy[d], next_rx -= dx[d];
                    }
                    break;
                }
            }

            // BLUE moving
            while (1) {
                // until wall or hole
                if (board[next_by][next_bx] != '#' && board[next_by][next_bx] != 'O') {
                    next_by += dy[d], next_bx += dx[d];
                }
                else {
                    if (board[next_by][next_bx] == '#') {
                        next_by -= dy[d], next_bx -= dx[d];
                    }
                    break;
                }
            }

            // RED, BLUE positon check
            if (next_rx == next_bx && next_ry == next_by) { 
                if (board[next_ry][next_rx] != 'O') { 
                    int red_dist = abs(next_ry - cur.ry) + abs(next_rx - cur.rx);
                    int blue_dist = abs(next_by - cur.by) + abs(next_bx - cur.bx);
                    if (red_dist > blue_dist) {
                        next_ry -= dy[d];
                        next_rx -= dx[d];
                    }
                    else {
                        next_by -= dy[d];
                        next_bx -= dx[d];
                    }
                }
            }

            if (visited[next_ry][next_rx][next_by][next_bx] == 0) {
                visited[next_ry][next_rx][next_by][next_bx] = 1;
                INFO next;
                next.ry = next_ry;
                next.rx = next_rx;
                next.by = next_by;
                next.bx = next_bx;
                next.count = cur.count + 1;
                q.push(next);
            }
        }

    }
    return answer;
}

int main() {
    
    // input
    cin >> N >> M;

    for (int i = 0; i < N; i++) {
        string input;
        cin >> input;
        for (int j = 0; j < M; j++) {
            board[i][j] = input[j];

            // start INFO initialize
            if (board[i][j] == 'R') {
                start.ry = i;
                start.rx = j;
            }
            if (board[i][j] == 'B') {
                start.by = i;
                start.bx = j;
            }
        }
    }

    // start INFO initialize
    start.count = 0;

    cout << bfs();
}