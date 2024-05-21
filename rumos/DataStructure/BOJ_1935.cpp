#include <iostream>
#include <vector>
#include <iomanip>

using namespace std;

int N; // 피연산자의 개수
vector<int> alphabet; // 피연산자에 대응하는 값
vector<double> st; // 피연산자를 담아 둘 스택


int main() {

    // input
    cin >> N;
    string input;
    cin >> input;

    // alphabet - value
    // ex) A == 0
    alphabet.resize(N);
    for (int i = 0; i < N; i++) {
        cin >> alphabet[i];
    }
    // operand - operator
    for (int i = 0; i < input.size(); i++) {
        // operand
        if (input[i] - 'A' >= 0 && input[i] - 'A' <= 26) {
            st.push_back(alphabet[input[i] - 'A']);
        }

        // operator
        else {
            double second = st.back();
            st.pop_back();
            double first = st.back();
            st.pop_back();
            double new_value;

            if (input[i] == '+') { new_value = first + second; }
            else if (input[i] == '-') { new_value = first - second; }
            else if (input[i] == '*') { new_value = first * second; }
            else if (input[i] == '/') { new_value = first / second; }

            st.push_back(new_value);
        }
    }

    cout << setprecision(2) << fixed << st.back();
}