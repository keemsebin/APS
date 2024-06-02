#include <iostream>

using namespace std;

long long pSum[301][301];

int N, M;
int K;

int main() {
    // input
    cin >> N >> M;

    for(int i = 1; i <= N; i++) {
        for(int j = 1; j <= M; j++) {
            cin >> pSum[i][j];
            pSum[i][j] += pSum[i][j - 1] + pSum[i - 1][j] - pSum[i - 1][j - 1];
        }
    }

    // using prefix sum
    cin >> K;
    
    for(int i = 0; i < K; i++) {
        int x1, y1, x2, y2;
        cin >> x1 >> y1 >> x2 >> y2;
        cout << pSum[x2][y2] - pSum[x1 - 1][y2] - pSum[x2][y1 - 1] + pSum[x1 - 1][y1 - 1] << "\n";
    }

    return 0;

}