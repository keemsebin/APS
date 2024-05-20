const fs = require("fs");
let input = fs
  .readFileSync("naarang/DataStructure/input.txt")
  .toString()
  .trim()
  .split("\n");

let computer = Number(input[0]);
let num = Number(input[1]);
// 인접리스트(양방향)
let link = Array.from({ length: computer + 1 }, () => []);
for (let i = 2; i < num + 2; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  link[a].push(b);
  link[b].push(a);
}

// 노드 방문여부
let visit = Array.from({ length: computer + 1 }, () => false);
let answer = 0;

function DFS(v) {
  for (let next of link[v]) {
    if (!visit[next]) {
      visit[next] = true;
      answer++; // 방문하지 않은 노드를 만나면  +1
      DFS(next);
    }
  }
}

visit[1] = true; // 첫번째 노드 방문처리
DFS(1);

console.log(answer);
