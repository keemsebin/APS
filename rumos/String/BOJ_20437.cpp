#include <iostream>
#include <map>

using namespace std;

/**
 * 3. 어떤 문자를 K개 포함하는 가장 짧은 연속 문자열의 길이
 * 4. 어떤 문자를 K개 포함하고, 문자열의 첫번째와 마지막 글자가 해당 문자로 같은
 *      가장 긴 연속 문자열의 길이
*/

int T;

map<char, int> alphabet;

int main() {

    ios_base::sync_with_stdio(0); cin.tie(0); cout.tie(0);

    // input
    cin >> T;

    for(int t = 0; t < T; t++) {

        string W;
        int K;
        cin >> W >> K;

        // W의 알파벳, 빈도수 기록
        for(int i = 0; i < W.size(); i++) {
            alphabet[W[i]]++;
        }

        int answer_min = 1e9;
        int answer_max = -1;

        // 빈도수에 따라서 연속 문자열 찾기
        for(int i = 0; i < W.size(); i++) {
            // 빈도수가 K개 미만은 패스
            if(alphabet[W[i]] < K) continue;

            // 빈도수가 K개 이상인 것들은 카운트
            int cnt = 0;
            for(int j = i; j < W.size(); j++) {
                if(W[i] == W[j]) cnt++;

                if(cnt == K) {
                    answer_min = min(answer_min, j - i + 1);
                    answer_max = max(answer_max, j - i + 1);
                    break;
                }
            }
        }

        // 출력
        if(answer_max == -1 || answer_min == 1e9) cout << "-1" << "\n";
        else cout << answer_min << " " << answer_max << "\n"; 

    }
    return 0;
}