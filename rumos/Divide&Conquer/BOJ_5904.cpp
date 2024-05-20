#include <iostream>
#include <vector>

using namespace std;

string moo = "moo";

int N;

void d_and_c(int n, int k, int length) {   // length는 현재 배열 S(k)의 길이
    // moo 배열의 길이가 3 이하이면 재귀할 필요 없음
    if(n <= 3) {
        cout << moo[n - 1];
        return;
    }

    // 아직 n에 미치지 못한다면 다음 단계 (k + 1, next_length)
    int next_length = length * 2 + k + 3; // S(k) = S(k - 1) + k + 3 + S(k - 1)
    if(next_length < n) {
        d_and_c(n, k + 1, next_length);
    }
    else { 
        if(length < n && n <= length + k + 3) { // S(k -1)의 첫번째는 m
            if(n - length != 1) cout << "o";
            else cout << "m";
            return;
        }
        else {
            // 뒤에 있는 S(k - 1)에 존재하면 S(k - 1)에 대해서 확인해야 함
            d_and_c(n - (length + k + 3), 1, 3);
        }

    }
}

int main() {
    // input
    cin >> N;

    d_and_c(N, 1, 3); // 처음 moo의 길이는 3, k는 1부터 시작
}