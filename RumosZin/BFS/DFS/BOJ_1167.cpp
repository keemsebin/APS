#include <iostream>
#include <vector>
#include <string.h>

using namespace std;

int V;

vector<pair<int, int>> graph[100001];
int visited[100001];
int max_weight = 0;
int farthest_node = 0;

void dfs(int node, int weight) {

    // find farthest node
    if (weight > max_weight) {
        max_weight = weight;
        farthest_node = node;
    }

    // visit check
    visited[node] = true;

    // next node
    for (int i = 0; i < graph[node].size(); i++) {
        int next_node = graph[node][i].first;
        int next_weight = graph[node][i].second;

        if (visited[next_node] == 1) continue;
        else {
            dfs(next_node, weight + next_weight);
        }
    }
}

int main() {

    // input
    cin >> V;

    for (int i = 0; i < V; i++) {
        int node;
        cin >> node;
        while (true) {
            int next_node, weight;
            cin >> next_node;
            if (next_node == -1) break;
            else {
                cin >> weight;
            }
            graph[node].push_back({ next_node, weight });
        }
    }

    // find farthest node from node 1 
    dfs(1, 0);

    // initialize
    max_weight = 0;
    memset(visited, 0, sizeof(visited));

    // find tree's diagonal
    dfs(farthest_node, 0);

    cout << max_weight;

}