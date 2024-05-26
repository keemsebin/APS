#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int N;
int answer = 0;
typedef struct talk {
    int cost, value;
};
vector<talk> v;
vector<int> dp;

int main() {
    // input
    cin >> N;
    dp.resize(N + 2);

    int t, p;
    v.push_back({0, 0});

    for(int i = 0; i < N; i++) {
        cin >> t >> p;
        v.push_back({t, p});
    }
    // dp
    dp[0] = 0;
    int current_max = 0;

    for(int i = 1; i <= N + 1; i++) {
        current_max = max(current_max, dp[i]);
        if(i + v[i].cost > N + 1) continue;
        else {
            dp[i + v[i].cost] = max(current_max + v[i].value, dp[i + v[i].cost]);
        }
        
        answer = current_max;
    }

    // answer 
    cout << answer;
    return 0;

}