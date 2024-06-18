#include <iostream>
#include <string>
#include <map>

using namespace std;

int N; // 파일의 개수
map<string, int> wides; // 확장자 이름, 개수

int main() {
    // input
    cin >> N;

    for(int i = 0; i < N; i++) {
        string input;
        cin >> input;
        int index = input.find('.');   

        string wide = input.substr(index + 1, -1);
        wides[wide]++;   
    }

    for(auto iter = wides.begin(); iter != wides.end(); iter++) {
        cout << iter -> first << " " << iter -> second << "\n";
    }
}