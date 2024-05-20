#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int N;
int arr[1024][1024];

// 나누어진 배열의 기준 좌표 => 왼쪽 위 좌표

int dc(int row, int col, int length) {
    vector<int> v;

    if(length == 1) {
        v.push_back(arr[row][col]);
        v.push_back(arr[row][col + 1]);
        v.push_back(arr[row + 1][col]);
        v.push_back(arr[row + 1][col + 1]);

        sort(v.begin(), v.end());

        return v[2]; // 두 번째 수
    }
    else {
        v.push_back(dc(row, col, length/2));
        v.push_back(dc(row + length, col, length/2));
        v.push_back(dc(row, col + length, length/2));
        v.push_back(dc(row + length, col + length, length/2));

        sort(v.begin(), v.end());
        return v[2]; // 두 번째 수
    }
}

int main() {
    // input
    cin >> N;

    for(int i = 0; i < N; i++) {
        for(int j = 0; j < N; j++) {
            cin >> arr[i][j];
        }
    }

    cout << dc(0, 0, N/2) << "\n";
}