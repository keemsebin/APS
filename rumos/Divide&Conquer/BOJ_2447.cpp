#include <iostream>

using namespace std;

int N;

// N = 9
// 가운데 뚫린 네모의 좌표
// (3,3)(3,4)(3,5)
// (4,3)(4,4)(4,5)
// (5,3)(5,4)(5,5)
// 즉 N이 9일 때 [N/3] 이상 [N/3 + 3] 미만까지의 값을 x, y 좌표로 가지면 빈 곳!

void pattern(int y, int x, int n) {

    // 빈 곳에 해당하는 좌표
    if((y / n) % 3 == 1 && (x / n) % 3 == 1) {
        cout << " ";
    }

    // 빈 곳의 좌표가 아님
    else {
        // n이 3으로 나누어 떨어짐
        if(n / 3 == 0) cout << "*"; 
        else pattern(y, x, n / 3);
    }
}

int main() {
    // input
    cin >> N;

    // 결국 이차원 배열을 어떤 패턴을 채우는지에 관한 문제
    for(int i = 0; i < N; i++) {
        for(int j = 0; j < N; j++) {
            pattern(i, j, N);
        }
        cout << "\n";
    }

}