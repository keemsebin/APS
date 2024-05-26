#include <iostream>
#include <vector>

using namespace std;

int N;
long long S;
int length = 100001; // 가능한 최대의 길이
vector<int> arr;

int main() {
    // input
    cin >> N >> S;
    arr.resize(N + 1);
 
    for(int i = 0; i < N; i++) {
        cin >> arr[i];
    }

    // two pointer
    int low = 0;
    int high = 0;
    long long sum = arr[0]; // 합계의 초기값
    while(high < N) {
        // case 1
        if(sum < S) {
            high++;
            if(high < N) sum += arr[high];
            continue;
        }

        // case 2
        else if(sum > S) {
            sum -= arr[low];
            if(length > high - low + 1) length = high - low + 1;
            low++;
            continue;
        }

        // case 3
        else if(sum == S) {
            if(length > high - low + 1) length = high - low + 1;
            high++;
            if(high < N) sum += arr[high];
            continue;
        }
    }

    if(length == 100001) cout << 0;
    else cout << length;

    return 0;
}