const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const V = Number(input[0]);
const edge = input.slice(1);
const tree = Array(V + 1)
  .fill(0)
  .map(() => []);
let isVisit = Array(V + 1).fill(false);
let farNode = 0;
let maxDistance = 0;

for (let i = 0; i < V; i++) {
  const [node, ...edges] = edge[i].split(" ").map(Number); // node = 1, edges =  3 2 -1
  for (let j = 0; j < edges.length - 1; j += 2) {
    // 마지막 -1은 버리고, 연결된 정점-거리만 저장
    const adj = edges[j]; // 정점 3
    const weight = edges[j + 1]; // 거리가 2
    tree[node].push([adj, weight]); // [[], [3,2], [4,4], []]
  }
}
// 정점 1은 정점 3과 거리가 2인 간선으로 연결
// 정점 2는 정점 4와 거리가 4인 간선으로 연결
// 정점 3은 정점 1과 거리가 2인 간선으로, 정점 4와 거리 3인 간선으로 연결
// 정점 4는 정점 2와 거리가 4인 간선으로, 정점 3과 거리 3인 간선으로, 정점 5와 거리 6인 간선으로 연결
// 정점 5는 정점 4와 거리가 6인 간선으로 연결
function dfs(node, distance) {
  isVisit[node] = true;
  if (distance > maxDistance) {
    maxDistance = distance;
    farNode = node;
  }

  for (let [nextNode, nextDistance] of tree[node]) {
    if (!isVisit[nextNode]) {
      dfs(nextNode, distance + nextDistance);
    }
  }
}
dfs(1, 0);

isVisit = Array(V + 1).fill(false);
dfs(farNode, 0);
console.log(maxDistance);
