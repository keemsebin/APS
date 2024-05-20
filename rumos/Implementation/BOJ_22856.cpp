#include <iostream>
#include <vector>
#include <algorithm>
#include <cmath>

using namespace std;

int N;

typedef struct node {
    int node, left, right;
};

vector<node> v;
vector<int> visited;
int answer = 0;

void recursive(int n) {

    //cout << "n: " << n << " " << v[n].left << " " << v[n].right << "\n";
    //cout << "\tanswer: " << answer << "\n";

    // left, visited
    if(v[n].left > 0 && visited[v[n].left] != 1) {
        answer++;
        recursive(v[n].left);
    }

    // right, visited
    if(v[n].right > 0 && visited[v[n].right] != 1) {
        answer++;
        recursive(v[n].right);

        if(visited[v[n].left] == 1 && visited[v[n].right] == 1) {
            visited[n] == 1;
        }
    }

    // end
    if(v[n].left == -1 && v[n].right == -1) {
        answer++;
        visited[n] = 1;
        return;
    }

    // parent
    else {
        answer++;
        return;
    }
}


int main() {

    // input
    cin >> N;

    v.resize(N + 1);
    visited.resize(N + 1);
    v.push_back({0, 0, 0});

    for(int i = 0; i < N; i++) {
        int node, left, right;
        cin >> node >> left >> right;
        v[i + 1].node = node;
        v[i + 1].left = left;
        v[i + 1].right = right;
    }

    recursive(1);

    int p = 0;
    while(1) {
        int num = pow(2, p);
        if(N >= num) {
            p++; continue;
        }
        else {
            break;
        }
    }
    cout << "p" << p << "\n";
    cout << answer - p;
}