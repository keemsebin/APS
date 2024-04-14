#include <iostream>
#include <queue>

using namespace std;

int N, K;

queue<pair<int, int>> q;
int visited[1000001];

void queue_push(int location, int count) {
    if (visited[location] == 1) return;
    if (location < 0 || location > 100000) return;
    else {
        q.push({ location, count });
        visited[location] = 1;
    }
}

int bfs() {
    while (!q.empty()) {
        int now_location = q.front().first;
        int now_count = q.front().second;
        q.pop();

        // stop condition
        if (now_location == K) {
            return now_count;
        }

        // X - 1
        int next_location = now_location - 1;
        queue_push(next_location, now_count + 1);        

        // X + 1
        next_location = now_location + 1;
        queue_push(next_location, now_count + 1);

        // 2*X
        next_location = now_location * 2;
        queue_push(next_location, now_count + 1);
    }
}

int main() {

    // input
    cin >> N >> K;

    q.push({ N, 0 });
    visited[N] = 1;
    cout << bfs();
}