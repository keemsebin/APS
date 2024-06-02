#include <iostream>

using namespace std;

int N;

long long city[100001]; // 도시의 1L당 주유 비용
long long dist[100001]; // i -> i+1 거리

long long answer = 0;

int main() {
    // input
    cin >> N;

    for(int i = 0; i < N - 1; i++) {
        cin >> dist[i];
    }

    for(int i = 0; i < N; i++) {
        cin >> city[i];
    }

    // greedy
    int mark = city[0];
    for(int i = 0; i < N; i++) {
        if(i == 0) {
            answer += city[i] * dist[i];
        }
        else {
            /**
             * 처음 풀이 : 항상 직전 도시의 값과 비교
            */
            // int first = city[i-1] * (dist[i-1] + dist[i]);
            // int second = city[i-1] * dist[i-1] + city[i] * dist[i];
            // if(first < second) answer += city[i-1] * dist[i];
            // else answer += city[i] * dist[i];

            /**
             * 최종 풀이 : mark 값을 두어 이전의 가장 작은 값을 선택
            */           
            if(mark < city[i]) answer += mark * dist[i];
            else {
                mark = city[i];
                answer += mark * dist[i];
            }
        }
    }

    cout << answer;
}