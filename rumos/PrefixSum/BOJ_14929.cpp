#include <iostream>

using namespace std;

int N;
long long answer = 0;
long long prefix_sum = 0;

int main() {
    // input
    cin >> N;

    /**
     * x1y2 + x1y3 + ...
     * = x1 * (y2 + y3 + ...)
    */

    // prefix sum
    int t;
    while(N--) {
        cin >> t;
        answer += t * prefix_sum;
        prefix_sum += t;
    }

    cout << answer;

    return 0;
}