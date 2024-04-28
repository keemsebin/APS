#include <iostream>
#include <algorithm>

using namespace std;

int N, M, R; 
int graph[300][300];

void dfs(int left) {
    if(left == 0) return;
    else {
        int depth = min(N, M) / 2 + min(N, M) % 2;
        for(int i = 0; i < depth; i++) {
            int r = i;
            int c = i;
            int value = graph[r][c];

            // left
            while(r < N - 1 - i) {
                int next_value = graph[r + 1][c];
                graph[r + 1][c] = value;
                value = next_value;
                r++;
            }
            // bottom
            while(c < M - 1 - i) {
                int next_value = graph[r] [c + 1];
                graph[r][c + 1] = value;
                value = next_value;
                c++;
            }
            // right
            while(r >= 1 + i) {
                int next_value = graph[r - 1][c];
                graph[r - 1][c] = value;
                value = next_value;
                r--;
            }
            // top
            while(c >= 1 + i) {
                int next_value = graph[r][c - 1];
                graph[r][c - 1] = value;
                value = next_value;
                c--;
            }
        }
        dfs(left - 1);
    }
    
}

int main() {
    // input
    cin >> N >> M >> R;

    for(int i = 0; i < N; i++) {
        for(int j = 0; j < M; j++) {
            cin >> graph[i][j];
        }
    }

    // rotate
    dfs(R);

    // output
    for(int i = 0; i < N; i++) {
        for(int j = 0; j < M; j++) {
            cout << graph[i][j] << " ";
        }
        cout << "\n";
    }

    return 0;
    
}