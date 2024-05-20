#include <iostream>
#include <algorithm>
#include <string>

using namespace std;

int max_result = -1;
int min_result = 1e9;

int find_odd(int input) {
    int odd_num = 0;
    while(input > 0) {
        int num = input % 10;
        if(num % 2 == 1) odd_num++;
        input /= 10;
    }

    return odd_num;
}

void recursive(int n, int odd) {

    // one
    if(n < 10) {
        max_result = max(odd, max_result);
        min_result = min(odd, min_result);
        return;
    }

    // two
    else if(n < 100) {
        int next_n = n / 10 + n % 10;
        recursive(next_n, odd + find_odd(next_n));
    }

    // three
    else {
        string s = to_string(n);
        
        for(int i = 1; i < s.size() - 1; i++) {
            for(int j = i + 1; j < s.size(); j++) {
                string s1 = s.substr(0, i);
                string s2 = s.substr(i, j - i);
                string s3 = s.substr(j, s.size() - j);

                int num = stoi(s1) + stoi(s2) + stoi(s3);
                recursive(num, odd + find_odd(num));
            }
        }
    }
}


int main() {

    // input 
    int N;
    cin >> N;

    // find odd numbers
    int odd = find_odd(N);
    
    // recursive
    recursive(N, odd);

    cout << min_result << " " << max_result << "\n";
}