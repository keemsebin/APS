#include <iostream>
#include <map>
#include <vector>
#include <algorithm>

using namespace std;

int N; // 듣도 못한 사람 수
int M; // 보도 못한 사람 수

map<string, int> listen; // 듣도 못한 사람
map<string, int> see; // 보도 못한 사람

vector<string> answer;


int main() {
    // input 
    cin >> N >> M;

    for(int i = 0; i < N; i++) {
        string input;
        cin >> input;
        listen[input]++;
    }

    for(int j = 0; j < M; j++) {
        string input;
        cin >> input;
        see[input]++;
    } 

    for(auto iter = listen.begin(); iter != listen.end(); iter++) {
        string person = iter -> first;
        if(see[person]) answer.push_back(person);
        else continue;
    }

    cout << answer.size() << "\n";
    for(int i = 0; i < answer.size(); i++) {
        cout << answer[i] << "\n";
    }

    return 0;
}