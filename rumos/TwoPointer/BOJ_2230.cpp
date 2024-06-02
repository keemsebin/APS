#include <iostream>
#include <vector>
#include <algorithm>
#define MAX 2000000000

using namespace std;

int N; // 원소의 개수
long long M; // 두 수의 차이 threshold
vector<int> arr;
vector<long long> partial_sum; // index0부터 indexi까지의 합

long long min_diff = MAX;

int main() {
    cin.tie(NULL);
    ios_base::sync_with_stdio(false);

    // input
    cin >> N >> M;
    long long input;
    arr.resize(N);

    for(int i = 0; i < N; i++) {
        cin >> arr[i];
    }

    // sort
    sort(arr.begin(), arr.end());

    // two pointer
    int low = 0;
    int high = 0;
    while(low < N && high < N) {
       
        long long diff = arr[high] - arr[low];
        if(diff < 0) diff = diff * -1;

        // case 1
        if(diff < M) {
            high++;
        }

        // case 2
        else if(diff >= M){
            if(min_diff > diff) min_diff = diff;
            low++;
        }
    }

    cout << min_diff;

    return 0;
}