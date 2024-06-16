#include <iostream>
#include <map>

using namespace std;

string S, E; // 개강 총회를 시작한 시간, 끝낸 시간
string Q; // 개강 총회 스트리밍을 끝낸 시간
string time_i, name;

map<string, int> present_before; // 이름, 들어온 시간
int answer = 0;

int main() {

    ios::sync_with_stdio(0), cin.tie(0);

    // input
    cin >> S >> E >> Q;  

    while(cin >> time_i >> name) {

        if(time_i <= S) {
            present_before[name] = 1;
        }
        else if(time_i >= E && time_i <= Q) {
            if(present_before[name] == 1) {
                answer++;
                present_before[name] = 2; // 중복 채팅이 있을 수 있음
            }          
        }
    }
    cout << answer;

    return 0;
}