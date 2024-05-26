#include <iostream>
#include <vector>
#include <map>

using namespace std;

int N, K;
int length = 0;

vector<int> arr;
int visited[100001];

/**
 * N의 크기가 매우 클 때, 배열로 기억할 수 없고 map으로 기억해야 함
 * map<int, int> m;
 * m[low]++, m[high]--;
*/

int main() {
    // input
    cin >> N >> K;
    arr.resize(N + 1);

    for(int i = 0; i < N; i++) {
        cin >> arr[i];
    }

    // two pointer
    int high = 0;

   for(int low = 0; low < N; low++) {
        // low를 고정시키고 high를 증가시키며 최대로 이동
        while(high < N && visited[arr[high]] < K) {
            visited[arr[high]]++;
            high++;
        }

        if(length < high - low) length = high - low;
        if(high == N) break;
        
        // low를 증가시키니까 visited에서 제외
        visited[arr[low]]--;
   }

   cout << length;

   return 0;
}