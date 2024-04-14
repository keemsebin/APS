const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let v = Number(input[0]);

// list[노드][거리]
let list = Array.from({ length: v + 1 }, () => []);
for (let i = 1; i <= v; i++) {
  let line = input[i].split(" ").map(Number);
  for (let j = 1; j < line.length - 1; j += 2) {
    list[line[0]].push([line[j], line[j + 1]]);
  }
}

let visit = Array.from({ length: v + 1 }, () => false);
let answer = [0, 0]; // [가장 먼 노드, 최대 거리]

function DFS(node, sum) {
  visit[node] = true;
  if (answer[1] < sum) {
    answer[0] = node;
    answer[1] = sum;
  }

  for (let next of list[node]) {
    if (!visit[next[0]]) {
      DFS(next[0], sum + next[1]);
    }
  }
}

DFS(1, 0); // 임의의 노드에서 가장 먼 노드 계산
answer[1] = 0; // 최대 거리값 초기화
visit = new Array(v + 1).fill(false); // visit 배열 초기화

DFS(answer[0], 0); // 가장 먼 노드부터 DFS 시작 -> 이를 통해 계산된 최대 거리값이 "트리의 지름"

console.log(answer[1]);

// 모든 노드를 출발점으로 DFS 탐색을 하게 되면 시간 초과가 발생
// 트리의 지름이란, 트리 상에서 가장 먼 거리를 가지는 두 정점 사이의 경로
/*
공식 -> 이해가 안가네? "트리의 지름" 더 찾아보기..
1. DFS를 통해 임의의 정점(x)으로부터 가장 먼 정점(y)을 구한다.
2. DFS를 통해 구해진 (y)정점으로부터 가장 먼 정점(z)를 구한다.
3. (y) 정점과 (z) 정점을 잇는 경로가 트리의 지름이 된다.
*/
