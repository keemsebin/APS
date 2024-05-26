#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

int N;
vector<double> drink;
double answer;

int main() {
    // input
    cin >> N;

    int energy;

    for(int i = 0; i < N; i++) {
        cin >> energy;
        drink.push_back(energy);
    }

    // sorting
    sort(drink.begin(), drink.end());

    // greedy
    answer = drink[drink.size() - 1];
    for(int i = 0; i < N - 1; i++) {
        answer += drink[i] / 2;
    }

    cout << answer;

}