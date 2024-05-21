#include <iostream>

using namespace std;

int N;
int graph[128][128];
int blue_paper = 0;
int white_paper = 0;

void color(int row, int col, int length) {
    
    int startColor;
    if(graph[row][col] == 1) startColor = 1;
    else startColor = 0;
    
    bool isSameColor = true;

    for(int i = row; i < row + length; i++) {
        for(int j = col; j < col + length; j++) {
            if(graph[i][j] == startColor) continue;
            else {
                isSameColor = false;
                break;
            }
        }
        if(!isSameColor) break;
    }

    if(isSameColor) {
        if(startColor == 0) white_paper++;
        else blue_paper++;
        return;
    }

    if(length == 1) return;

    color(row, col, length / 2);
    color(row, col + length / 2, length / 2);
    color(row + length / 2, col, length / 2);      
    color(row + length / 2, col + length / 2, length / 2);
}

int main() {
    // input
    cin >> N;

    for(int i = 0; i < N; i++) {
        for(int j = 0; j < N; j++) {
            cin >> graph[i][j];
        }
    }

    int length = N; // 한 변의 길이
    color(0, 0, N);

    cout << white_paper << "\n" << blue_paper;
}