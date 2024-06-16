#include <iostream>
#include <string>

using namespace std;

string input;
int num_cnt = 0; // 4글자로 이루어진 숫자 묶음의 개수

/**
 * 숫자 묶음은 8개
 * 콜론은 7개
*/

string make_zero(int cnt) {
    string ret = "";
    string temp = ":0000";

    for(int i = 0; i < cnt; i++) ret += temp;

    return ret;
}

int main() {

    ios_base::sync_with_stdio(0); cin.tie(0); cout.tie(0);

    // input
    cin >> input;

    /**
     * 0으로만 이루어진 숫자 묶음을 위한 선행 작업
    */
    string temp = "";
    for(int i = 0; i < input.size(); i++) {
        if(input[i] == ':') {
            if(temp != "") num_cnt++;
            temp = "";
        }
        else {
            temp += input[i];
            if(i == input.size() - 1) num_cnt++; // 마지막 묶음
        }
    }

    // 0으로만 이루어진 구간 생성
    string zero = make_zero(8 - num_cnt);

    // zero가 들어갈 위치 찾기
    int index = input.find("::");

    if(index != string::npos) {
        input.erase(index, 1); // : 하나 지우기
        input.insert(index, zero); // 0으로 이루어진 문자열 채우기

        // 문자열의 처음, 끝 확인
        if(input[0] == ':') input = input.substr(1, input.size() - 1);
        if(input[input.size() - 1] == ':') input = input.substr(0, input.size() - 1);
    }

    string answer = "";
    temp = "";

    // 4글자 중에서 생략된 것 넣기
    for(int i = 0; i < input.size(); i++) {
        if(input[i] == ':') {
            int temp_size = temp.size();

            // 앞에 생략된 0 삽입
            for(int j = 0; j < 4 - temp_size; j++) temp = '0' + temp;

            answer += temp;
            answer += ':';

            temp = "";
        }
        else {
            temp += input[i];
            if(i == input.size() - 1) {
                int temp_size = temp.size();
                for(int j = 0; j < 4 - temp_size; j++) temp = '0' + temp;

                answer += temp;
            }
        }
    }

    cout << answer;

    return 0;
}