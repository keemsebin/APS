#include <iostream>
#include <vector>

using namespace std;

int N, M;
int answer = 0;

int main() {
    // input
    cin >> N >> M;

    vector<int> arr(N); // 크기 N의 벡터 생성

    for(int i = 0; i < N; i++) {
        cin >> arr[i];
    }

    // two pointer
    int low = 0;
    int high = 0;
    int sum = arr[0]; // 합계 초기값

    while(high < N) { // O(N)
        // case 1
        if(sum < M) {
            high++;
            if(high < N) sum += arr[high];
        }

        // case 2
        else if(sum > M) {
            sum -= arr[low];
            low++;
        }

        // case 3
        else if(sum == M) {
            sum -= arr[low];
            low++; // 포인터 한 칸씩 둘 다 증가 (다음 M되는 케이스 찾아야 함)
            high++;

            answer++;

            // 포인터 이동한 만큼 합계 조정           
            if(high < N) sum += arr[high];
        }
    }

    cout << answer;
}