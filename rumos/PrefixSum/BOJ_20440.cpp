#include <iostream>
#include <algorithm>
#include <queue>

#define INF -987654321

using namespace std;

int N;
pair<int, int> arr[1000002];
priority_queue<int> pq;

int mos = 0;
int max_mos = INF;

int start_time = INF;
int end_time = INF;

int main() {
    // input
    cin >> N;
    
    for(int i = 0; i < N; i++) {
        cin >> arr[i].first >> arr[i].second;
    }

    // 배열 정렬
    sort(arr, arr + N);

    for(int i = 0; i < N; i++) {
        pq.push(-arr[i].second); // 작은 것이 우선 순위가 높도록
        mos++;

        // 모기가 들어오는 시간보다 나가는 것이 빠르다면 없앰
        while(!pq.empty() && -pq.top() <= arr[i].first) {pq.pop(); mos--;}

        // 현재 모기 기준으로 변경
        if(mos > max_mos) {
            start_time = arr[i].first;
            end_time = -pq.top();
            max_mos = mos;

            int index = i;
            
            // 나가는 시간과 들어오는 시간이 같을 때
            while(i + 1 != N && arr[i].second == arr[i + 1].first)
                end_time = arr[++i].second;
        }
    }

    cout << max_mos << "\n";
    cout << start_time << " " << end_time << "\n";
    
    return 0;
}