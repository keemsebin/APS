#include <iostream>
#include <vector>

using namespace std;

int N; // 컴퓨터의 수
int K; // 컴퓨터 쌍의 수
vector<int> networks[101]; 
int visited[101];
int answer = 0;

void dfs(int computer) {
    visited[computer] = 1;
    for (int i = 0; i < networks[computer].size(); i++) {
        int next = networks[computer][i];
        if (visited[next] != 1) {
            dfs(next);
            answer++;
        }
    }
}

int main() {

    // input
    cin >> N >> K;

    for (int i = 0; i < K; i++) {
        int first, second;
        cin >> first >> second;
        networks[first].push_back(second);
        networks[second].push_back(first);
    }

    // start with computer 1
    dfs(1);

    cout << answer << "\n";
    return 0;
}