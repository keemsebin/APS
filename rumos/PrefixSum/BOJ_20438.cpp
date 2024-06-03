#include <iostream>

using namespace std;

int N; // 학생의 수
int K; // 졸고 있는 학생의 수
int Q; // 출석 코드를 보낼 학생의 수
int M; // 주어질 구간의 수

bool sleepy[5003];
int pSum[5003]; // 출석 완료하면 true, 아니면 false

int main() {

    ios::sync_with_stdio(false);
	cin.tie(0);
	cout.tie(0);
    
    // input
    cin >> N >> K >> Q >> M;

    // sleepy check
    for(int i = 0; i < K; i++) {
        int num; cin >> num;
        sleepy[num] = true;      
    }
    for(int i = 3; i <= N + 2; i++) pSum[i] = 1;

    // present check
    for(int i =0; i < Q; i++) {
        int num;
        cin >> num;

        if(sleepy[num]) continue; // 조는 학생은 전달할 수 없음

        int next = num; // 다음 학생에게 전달

        while(next <= N + 2) {
            // 다음 학생이 졸고 있다면 건너뜀
            if(sleepy[next]) {
                next += num;
                continue;
            }

            // 전달 및 출석
            pSum[next] = 0;
            next += num;
        }
    }

    // 누적 합으로 i까지의 출석 못 한 학생을 미리 구한다
    for(int i = 4; i <= N + 2; i++) pSum[i] += pSum[i - 1];

    // 여러 테스트 케이스에 대해 pSum을 출력
    for(int i = 0; i < M; i++) {
        int start, end;
        cin >> start >> end;
        cout << pSum[end] - pSum[start - 1] << "\n";
    }

    return 0;
}