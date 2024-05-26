#include <iostream>
#include <queue>

using namespace std;

int ordering = 0;
int T; // 테스트 케이스
int N, M; // 문서의 개수, 궁금한 문서의 위치
int value; // 문서의 중요도 값

int main() {

    cin >> T;
    for (int t = 0; t < T; t++) {
        queue<pair<int, int>> q; // (위치, 중요도)
        priority_queue<int> pq; // 우선순위 큐
        ordering = 0;

        cin >> N >> M;
      
        for (int i = 0; i < N; i++) {
            cin >> value;
            q.push({ i, value });
            pq.push(value);
        }

        while (!q.empty()) {
            int index = q.front().first;
            int important = q.front().second;
         
            q.pop();

            if (pq.top() == important) {
                pq.pop();
                ordering++;
                if (index == M) {
                    cout << ordering << "\n";
                    break;
                }
            }
            else q.push({ index,important });          
        }
    }
}