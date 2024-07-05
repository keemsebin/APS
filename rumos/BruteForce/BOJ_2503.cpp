#include <iostream>

using namespace std;

bool fail[1000]; // 후보 거르기
int a, b;
int ans = 0;
int N, strike, ball;

void check(string str, int st, int ba){

    for(int i = 123; i < 988; i++){ // 989부터는 숫자 후보가 아님
        if(fail[i]) continue;
        a = 0, b = 0;
        string tmp = to_string(i);
        for(int k = 0; k < 3; k++){
            for(int s = 0; s < 3; s++){
                if(str[s] == tmp[k]){
                    if(s == k) a++;
                    else b++;
                }   
            }
        }
        if(a != st || b != ba) {
            fail[i] = true;
        }
    }
}

int main(void){
	ios::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL);

    // initialize
    for(int i = 0; i < 1000; i++) fail[i]=false;

    // input
    string current_num;
    cin >> N;
    for(int i = 0; i < N; i++){
        cin >> current_num >> strike >> ball;
        check(current_num, strike, ball);
    }

    int num;
    for(int i = 1; i < 10; i++){
        for(int j = 1; j < 10; j++){
            if(i == j) continue;
            for(int k = 1; k < 10; k++){
                if(k == i || k == j) continue;
                num = i * 100 + j*10 + k;
                if(!fail[num]) ans++;
            }
        }
    }

    cout << ans;
    return 0;
}