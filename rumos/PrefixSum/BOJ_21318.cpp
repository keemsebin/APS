#include <iostream>
#include <vector>

using namespace std;

int N; // 악보의 개수
int level[100001]; // 악보의 난이도
int mistake[100001]; // i번째에서 실수하면 1
int pSum[100001]; 

int Q; // 질문의 개수

int main() {
    ios::sync_with_stdio(false);
	cin.tie(0);
	cout.tie(0);

    // input
    cin >> N;

    int temp_level;

    for(int i = 1; i <= N; i++) {
        cin >> level[i];
    }

    // prefix sum
    for(int i = 1; i <= N; i++) {
        if(i != N && (level[i] > level[i + 1])) mistake[i] = 1;
    }

    pSum[1] = mistake[1];

    for(int i = 1; i <= N; i++) {
       pSum[i] = mistake[i] + pSum[i - 1];
    }

    // question
    cin >> Q;

    for(int i = 0; i < Q; i++) {
        int start, end; cin >> start >> end;
        if(mistake[end] != 1) cout << pSum[end] - pSum[start - 1] << "\n";
        else cout << pSum[end] - pSum[start - 1] - 1 << "\n";
    }

    return 0;
}