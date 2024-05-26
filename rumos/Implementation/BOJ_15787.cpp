#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int N, M; // train, command

int answer = 0;

int main() {

    // input
    cin >> N >> M;
    vector<int> train(N + 1, 0);

    // command
    int command, train_num, seat;
    for(int i = 0; i < M; i++) {
        cin >> command;
        if(command == 1 || command == 2) {
            cin >> train_num  >> seat;
            if(command == 1) train[train_num] |= (1 << seat);
            else if(command == 2) train[train_num] &= ~(1 << seat);
        }
        else if(command == 3 || command == 4) {
            cin >> train_num;
            if(command == 3) {
                train[train_num] = train[train_num] << 1;
                train[train_num] &= ((1 << 21) - 1);
            }
            else if(command == 4) {
                train[train_num] = train[train_num] >> 1;
                train[train_num] &= ~1;
            }
        }
    }

    // galaxy
    vector<bool> visited(1 << 21, false);
    int answer = 0;
    for(int i = 1; i <= N; i++) {
        if(visited[train[i]] == false) answer++;
        visited[train[i]] = true;
    }
    
    // answer
    cout << answer << "\n";
    return 0;
    
}
