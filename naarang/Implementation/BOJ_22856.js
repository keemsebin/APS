const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let n = Number(input.shift());
let tree = Array.from({ length: n + 1 }, () => []);
for (let i of input) {
  let line = i.split(" ").map(Number);
  tree[line[0]] = [line[1], line[2]];
}

let visited = Array.from({ length: n + 1 }, () => false);
let count = 0;
// 먼저 모든 노드 왔다 갔다 계산하기
function DFS(node) {
  visited[node] = true;

  // 왼쪽 자식 노드
  if (!visited[tree[node][0]] && tree[node][0] !== -1) {
    DFS(tree[node][0]);
    count++;
  }

  // 오른쪽 자식 노드
  if (!visited[tree[node][1]] && tree[node][1] !== -1) {
    DFS(tree[node][1]);
    count++;
  }

  // 오른쪽만 이동했을 때 끝가지 간 간선 빼기
}
function DFS2(node) {
  visited[node] = true;
  // 오른쪽 자식 노드
  if (!visited[tree[node][1]] && tree[node][1] !== -1) {
    DFS2(tree[node][1]);
    count--;
  }

  // 오른쪽만 이동했을 때 끝가지 간 간선 빼기
}
DFS(1);
count = count * 2; // 전체 간선을 왕복했다고 가정하고 2배해주기
visited = Array.from({ length: n + 1 }, () => false);
DFS2(1); // 오른쪽으로만 이동했을 때 간선 없애기
console.log(count);

// 전체 왕복 간선 수 - 오른쪽으로만 이동했을 때 간선 없애기
// 2 * n + 1, 2 * n + 2로 일차원 배열로 노드값 저장했더니 시간 초과 발생해서 수정함
// 추가로 DFS 중위순회로 마지막 노드를 찾은 다음에 해당 노드까지의 간선 수를 계산하는 것도 있다! (이것도 해보기)
