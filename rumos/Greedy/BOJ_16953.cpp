#include <iostream>
#include <queue>

using namespace std;

int A, B;
queue<pair<long long, long long>> q;
bool find_answer = false;

int main() {
    // input
    cin >> A >> B;

    // BFS
    q.push({A, 1});

    while(!q.empty()) {
        long long num = q.front().first;
        long long count = q.front().second;
        q.pop();

        // stop condition
        if(num == B) {
            cout << count;
            find_answer = true;
            break;
        }

        long long double_num = num * 2;
        long long one_num = num * 10 + 1;

        if(double_num <= B) q.push({double_num, count + 1});
        if(one_num <= B) q.push({one_num, count + 1});
    }

    if(!find_answer) { cout << "-1";}

}