#include <iostream>
#include <algorithm>

using namespace std;

int N; // 원생의 수
int K; // 나누려고 하는 조의 개수

int child[300001];
int diff[300001];

int answer = 0;

int main() {
    // input
    cin >> N >> K;
    for(int i = 0; i < N; i++) {
        cin >> child[i];
    }

    // greedy
    for(int i = 1; i < N; i++) {
        diff[i - 1] = child[i] - child[i - 1];
    }

    sort(diff, diff + N - 1);

    for(int i = 0; i < N- K; i++) {
        answer += diff[i];
    }

    cout << answer;

    return 0;
}