#include <iostream>
#include <string>

using namespace std;

string input; // 변수명

bool cpp = false;
bool java = false;
bool error = false;

int main() {
    // input
    cin >> input;

    // java or c++ 형식인지 확인
    int index = -1;
    for(int i = 0; i < input.size(); i++) {
        if(input[i] == '_') {
            cpp = true; 
            if(index + 1 == i) error = true;
            else index = i;
        }
        if(isupper(input[i])) java = true;   
    }

    /**
     * 예외 처리
    */

   // 맨 뒤 문자가 '_'이면 에러
   if(input[input.size() - 1] == '_') error = true;

   // 맨 앞 문자가 '_', 대문자이면 에러
   if(input[0] == '_' || isupper(input[0])) error = true;

    if(cpp && java) error = true;
    else if(!cpp && !java) cpp = true;

    if(error) {
        cout << "Error!" << "\n";
        exit(0);
    }

    // 변환
    string answer = "";
    if(cpp) {
        bool underbar = false;
        for(int i = 0; i < input.size(); i++) {
              if(input[i] == '_') { 
                underbar = true; 
                continue;
            }
            if(!underbar) answer += input[i];
            else { 
                answer += toupper(input[i]);
                underbar = false;
                continue;
            }

          
        }
    }
    else if(java) {
        bool uppercase = false;
        for(int i = 0; i < input.size(); i++) {
        
            if(input[i] - 'z' < -31) {
                uppercase = true;
                
            }
            if(!uppercase) answer += input[i];
            else {
                answer += "_";
                answer += tolower(input[i]);
                uppercase = false;
                continue;                
            }
        }
    }

    // 출력
    cout << answer ;

    return 0;
}