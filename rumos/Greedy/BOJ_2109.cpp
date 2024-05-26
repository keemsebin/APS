#include <iostream>
#include <queue>
#include <vector>
#include <algorithm>

using namespace std;

int N;
int pay, day;
int answer = 0;

vector<pair<int, int>> v;
priority_queue<int, vector<int>, greater<int>> pq;

int main() {
    // input
    cin >> N;

    for(int i = 0; i < N; i++) {
        cin >> pay >> day;
        v.push_back({day, pay}); // 날짜 기준으로 정렬해야 해서 day 먼저
    }

    // 날짜 기준 정렬
    sort(v.begin(), v.end());

    for(pair<int, int> p : v) { // p 타입이 vector v를 순회
        pq.push(p.second);
        if(pq.size() > p.first) pq.pop(); // 한 날짜에 여러 강연이 있는 경우 최대만 남김
    }

    while(!pq.empty()) {
        answer += pq.top();
        pq.pop();
    }

    cout << answer;
    
    return 0;
}