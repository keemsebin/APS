#include <iostream>
#include <algorithm>

using namespace std;

int N, K;
int arr[1000001];
int length = 0; // 가장 긴 길이

int main() {
    // input
    cin >> N >> K;
    for(int i = 0; i < N; i++) {
        cin >> arr[i];
    }

    // two pointer
    int low = 0;
    int high = 0;
    int odd_count = 0;

    while(high < N) {
        // 홀수의 개수가 K보다 클 때
        if(odd_count > K) {
            if(arr[low] % 2 == 1) odd_count--;
            low++;
        }
        else{
            if(arr[high] % 2 == 1) odd_count++;
            high++;
        }

        // 홀수 개수가 K 이하일 때 길이 판단
        if(odd_count <= K) length = max(length, high - low - odd_count);
    }

    cout << length;

    return 0;
}