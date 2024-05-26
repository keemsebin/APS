#include <iostream>


using namespace std;

string input;
int answer = 0;

int main () {

    // input
    cin >> input;

    // parsing
    bool isMinus = false;

    string num;
    for(int i = 0; i <= input.size(); i++) {
        // 계산
        if(input[i] == '-' || input[i] == '+' || i == input.size()){
            // 음수
            if(isMinus) {
                answer -= stoi(num);
                num = "";
            }
            // 양수
            else {
                answer += stoi(num);
                num = "";
            }
        }

        // 숫자
        else {
            num += input[i];
        }

        // 음수
        if(input[i] == '-') isMinus = true;
    }

    cout << answer;
}